package server

import (
	"time"

	"github.com/SnakeHacker/tweb/common/utils/io"
	"github.com/golang/glog"
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
	return
}
