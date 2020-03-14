package server

import (
	"fmt"
	"net/http"
	"time"

	"github.com/jinzhu/gorm"

	"github.com/SnakeHacker/tweb/common/utils/random"
	"github.com/SnakeHacker/tweb/common/utils/web"
	"github.com/SnakeHacker/tweb/common/utils/werkzeug"
	m "github.com/SnakeHacker/tweb/server/model"
	"github.com/SnakeHacker/tweb/server/proto"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

func (s *Server) handleSessionPublic(router *mux.Router) {
	router.HandleFunc(`/sessions/`, s.Login).Methods("POST")
}

func (s *Server) handleSession(router *mux.Router) {
	router.HandleFunc(`/sessions/`, s.Logout).Methods("DELETE")
}

// Login ...
func (s *Server) Login(w http.ResponseWriter, r *http.Request) {
	var req proto.LoginRequest
	err := web.ReadJSONBody(r.Body, &req)
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	if req.Username == "" {
		err = fmt.Errorf("missing username")
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}
	if req.Password == "" {
		err = fmt.Errorf("missing password")
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	var user m.User
	err = s.DB.Where("username = ?", req.Username).Find(&user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			resp := proto.LoginResponse{
				Error: proto.Error_INVALID_USERNAME_OR_PASSWORD,
			}
			web.RespondJSON(w, &resp)
			return
		}
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	// fetch the account matching the username, check password
	correctPassword := werkzeug.CheckPasswordHash(req.Password, user.PasswordHash)
	if !correctPassword {
		// password incorrect
		resp := proto.LoginResponse{
			Error: proto.Error_INVALID_USERNAME_OR_PASSWORD,
		}
		web.RespondJSON(w, &resp)
		return
	}

	// insert a session
	sess := m.Session{
		Token:     random.StringWithCharset(8, random.CharsetAlphaNumeric),
		Username:  req.Username,
		ExpiredAt: time.Now().Add(12 * time.Hour),
	}

	if err = s.DB.Create(&sess).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	// only return limited information about the user to frontend
	resp := proto.LoginResponse{
		Session: makeSession(user, sess.Token),
	}
	web.RespondJSON(w, &resp)
	return
}

// Logout ...
func (s *Server) Logout(w http.ResponseWriter, r *http.Request) {
	sess, ok := r.Context().Value(ctxSession).(proto.Session)
	if !ok {
		web.Unauthorized(w)
		return
	}

	err := s.DB.Where("token = ?", sess.Token).Delete(&m.Session{}).Error
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}
