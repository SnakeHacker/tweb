package model

import (
	"time"

	"github.com/SnakeHacker/tweb/server/proto"
	"github.com/jinzhu/gorm"
)

// Session ...
type Session struct {
	gorm.Model
	Token     string    `gorm:"column:token; not null" json:"token"`
	ExpiredAt time.Time `gorm:"column:expired_at; not null" json:"expired_at"`
	Username  string    `gorm:"column:username; not null" json:"username"`
}

func (Session) TableName() string {
	return "sessions"
}

// UserRole ...
type UserRole string

const (
	RoleAdmin UserRole = "administrator"
	RoleUser  UserRole = "user"
)

// UserRoleLUT ...
var UserRoleLUT = map[UserRole]proto.UserRole{
	RoleAdmin: proto.UserRole_ROLE_ADMIN,
	RoleUser:  proto.UserRole_ROLE_USER,
}

// User ...
type User struct {
	gorm.Model
	Username     string   `gorm:"column:username; not null"`
	Role         UserRole `gorm:"column:role; not null"`
	PasswordHash string   `gorm:"column:password; not null"`
}

func (User) TableName() string {
	return "users"
}
