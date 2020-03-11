package server

import (
	"context"
	"net/http"

	"github.com/jinzhu/gorm"

	"github.com/SnakeHacker/tweb/common/utils/web"
	m "github.com/SnakeHacker/tweb/server/model"
	"github.com/golang/glog"
)

func (s *Server) logMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		glog.Infof("%s %s", r.Method, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

type ctxKey string

const (
	ctxSession ctxKey = "session"
)

func (s *Server) authMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Access-Token")

		if token == "" {
			glog.Infof("Access-Token not found")
			web.Unauthorized(w)
			return
		}

		// fetch session
		var sess m.Session
		err := s.DB.Where("token = ?", token).First(&sess).Error
		if err != nil {
			if err == gorm.ErrRecordNotFound {
				glog.Infof("session not found")
				web.Unauthorized(w)
			}
			glog.Error(err)
			web.InternalError(w, err)
			return
		}

		// fetch user
		var user m.User
		err = s.DB.Where("username = ?", sess.Username).First(&user).Error

		if err != nil {
			glog.Error(err)
			if err == gorm.ErrRecordNotFound {
				glog.Infof("user not found")
				web.Unauthorized(w)
				return
			}

			glog.Error(err)
			web.InternalError(w, err)
			return
		}

		// rember session in the context
		ctx := context.WithValue(r.Context(), ctxSession, *makeSession(user, token))
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func makeSession(user m.User, token string) *m.Session {
	return &m.Session{
		Token:    token,
		Username: user.Username,
	}
}
