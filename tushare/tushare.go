package tushare

import (
	"os"

	"github.com/SnakeHacker/tweb/common"
	"github.com/golang/glog"
)

// TuShare ...
type TuShare struct {
	URL   string
	Token string
}

// New ...
func New() (t *TuShare, err error) {
	url, has := os.LookupEnv("TUSHARE_API")
	if !has {
		err = common.ErrTushareURL
		glog.Error(err)
		return
	}

	token, has := os.LookupEnv("TUSHARE_TOKEN")
	if !has {
		err = common.ErrTushareToken
		glog.Error(err)
		return
	}

	t = &TuShare{
		URL:   url,
		Token: token,
	}

	return
}
