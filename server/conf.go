package server

import (
	"net/http"
	"time"

	"github.com/SnakeHacker/tweb/common/utils/io"
	"github.com/SnakeHacker/tweb/common/utils/web"
	"github.com/SnakeHacker/tweb/server/proto"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

// Conf ...
type Conf struct {
	DB               DBConf   `yaml:"db"`
	CROSAllowOrigins []string `yaml:"cros_allow_origins"`
	StorageDir       string   `yaml:"storage_dir"`
	Web              struct {
		Port int `yaml:"port"`
		// Timeout config
		WriteTimeoutInSec time.Duration `yaml:"write_timeout_sec"`
		ReadTimeoutInSec  time.Duration `yaml:"read_timeout_sec"`
		ReadHeaderTimeout time.Duration `yaml:"read_header_timeout_sec"`
		IdleTimeoutInSec  time.Duration `yaml:"idle_timeout_sec"`
		ShutdownWaitInSec time.Duration `yaml:"shutdown_wait_sec"`
	} `yaml:"web"`
	CreateAdmin bool      `yaml:"create_admin"`
	Admin       Admin     `yaml:"admin"`
	Record      Record    `yaml:"record"`
	Minio       MinioConf `yaml:"minio"`
}

// Admin ...
type Admin struct {
	Username string `yaml:"username"`
	Password string `yaml:"password"`
}

// Record ...
type Record struct {
	Code string `yaml:"code"`
	URL  string `yaml:"url"`
}

// LoadConf load config from yaml
func LoadConf(yamlPath string) (conf Conf, err error) {
	if err = io.LoadYAML(yamlPath, &conf); err != nil {
		glog.Error(err)
		return
	}

	if err = conf.Validate(); err != nil {
		glog.Error(err)
		return
	}

	return
}

// Validate ...
func (c *Conf) Validate() (err error) {
	if err = c.DB.validate(); err != nil {
		glog.Info(err)
		return
	}

	if err = c.Minio.validate(); err != nil {
		glog.Error(err)
		return
	}
	return
}

func (s *Server) handleConf(router *mux.Router) {
	router.HandleFunc(`/conf/record/`, s.FetchRecord).Methods("GET")
}

// FetchRecord ...
func (s *Server) FetchRecord(w http.ResponseWriter, r *http.Request) {
	var resp proto.FetchRecordResponse

	resp.Url = s.Conf.Record.URL
	resp.Code = s.Conf.Record.Code

	web.RespondJSON(w, &resp)
	return

}
