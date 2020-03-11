package common

import (
	"fmt"
)

type errScope string

const (
	errUnknown errScope = ""
	errConf             = "conf_error"
	errDB               = "db_error"
	errLogin            = "login_error"
)

var (
	// Conf error

	// DB error
	ErrDBEmptyUsername = makeError(errDB, "missing Username")
	ErrDBEmptyPassword = makeError(errDB, "missing Password")
	ErrDBEmptyHost     = makeError(errDB, "missing Host")
	ErrDBEmptyPort     = makeError(errDB, "missing Port")
	ErrDBEmptyDatabase = makeError(errDB, "missing Database")

	// Login error
	ErrorInvalidUsernameOrPassowrd = makeError(errLogin, "invalid username or password")
)

func makeError(scope errScope, msg ...string) error {
	return fmt.Errorf("[%s]: %s", scope, msg)
}
