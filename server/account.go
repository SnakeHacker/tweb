package server

import (
	"net/http"

	"github.com/SnakeHacker/tweb/common"
	"github.com/SnakeHacker/tweb/common/utils/web"
	"github.com/SnakeHacker/tweb/common/utils/werkzeug"
	m "github.com/SnakeHacker/tweb/server/model"
	"github.com/SnakeHacker/tweb/server/proto"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

func (s *Server) handleAccount(router *mux.Router) {
	router.HandleFunc(`/accounts/`, s.FetchAccounts).Methods("GET")
	router.HandleFunc(`/accounts/`, s.CreateAccount).Methods("POST")
	router.HandleFunc(`/accounts/{id:[0-9]+}/`, s.UpdateAccount).Methods("PATCH")
	router.HandleFunc(`/accounts/{id:[0-9]+}/`, s.DeleteAccount).Methods("DELETE")
}

// FetchAccounts ...
func (s *Server) FetchAccounts(w http.ResponseWriter, r *http.Request) {
	var users []m.User
	var resp proto.FetchAccountResponse

	if err := s.DB.Find(&users).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	var accounts []*proto.User
	for _, user := range users {
		accounts = append(accounts, &proto.User{
			Id:       int64(user.ID),
			Nickname: user.Username,
			Role:     m.UserRoleLUT[user.Role],
		})
	}

	resp.Accounts = accounts
	web.RespondJSON(w, &resp)
	return
}

// CreateAccount ...
func (s *Server) CreateAccount(w http.ResponseWriter, r *http.Request) {
	var req proto.CreateAccountRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	if req.Username == "" || req.Password == "" {
		err := common.ErrorEmptyAccountUsernameOrPassowrd
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	user := m.User{
		Role:         m.RoleUser,
		Username:     req.Username,
		PasswordHash: werkzeug.GeneratePasswordHash(req.Password),
	}
	if err := s.DB.Create(&user).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}

// UpdateAccount ...
func (s *Server) UpdateAccount(w http.ResponseWriter, r *http.Request) {
	var req proto.UpdateAccountRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	var user m.User
	if err := s.DB.Where("id = ?", req.Id).Find(&user).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	user.Username = req.Username
	if err := s.DB.Save(&user).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}

// DeleteAccount ...
func (s *Server) DeleteAccount(w http.ResponseWriter, r *http.Request) {
	var req proto.DeleteAccountRequest

	if err := web.ReadJSONBody(r.Body, &req); err != nil {
		glog.Error(err)
		web.BadRequest(w, err)
		return
	}

	var user m.User
	if err := s.DB.Where("id = ?", req.Id).Find(&user).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	if err := s.DB.Delete(&user).Error; err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}

	return
}
