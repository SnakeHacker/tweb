package server

import (
	"github.com/SnakeHacker/tweb/common/utils/werkzeug"
	m "github.com/SnakeHacker/tweb/server/model"
	"github.com/golang/glog"
)

// CreateUser ...
func (s *Server) CreateUser(username string, password string, role m.UserRole) (err error) {
	user := &m.User{
		Username:     username,
		Role:         role,
		PasswordHash: werkzeug.GeneratePasswordHash(password),
	}

	if err = s.DB.Create(user).Error; err != nil {
		glog.Error(err)
		return
	}

	return
}
