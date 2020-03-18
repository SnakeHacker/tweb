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
	errAccount          = "account_error"
	errTushare          = "tushare_error"
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

	// Account error
	ErrorEmptyAccountUsernameOrPassowrd = makeError(errAccount, "username or password is empty")

	// Tushare error
	ErrTushareURL                        = makeError(errTushare, "url is empty.")
	ErrTushareToken                      = makeError(errTushare, "token is empty.")
	ErrTushareCodeEmpty                  = makeError(errTushare, "code is empty.")
	ErrTushareStockFieldsLen             = makeError(errTushare, "length of stock fields is not equal to headers.")
	ErrTushareDailyParamsEmpty           = makeError(errTushare, "daily params is empty.")
	ErrTushareDailyFieldsUnknown         = makeError(errTushare, "unknown daily field.")
	ErrTushareConceptDetailFieldsUnknown = makeError(errTushare, "unknown concept detail field.")
)

func makeError(scope errScope, msg ...string) error {
	return fmt.Errorf("[%s]: %s", scope, msg)
}
