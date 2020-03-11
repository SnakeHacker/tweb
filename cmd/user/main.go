package main

import (
	"flag"

	"github.com/SnakeHacker/tweb/server"
	m "github.com/SnakeHacker/tweb/server/model"
	"github.com/golang/glog"
)

var confPath = flag.String("c", "", "Path to the conf file")
var username = flag.String("username", "", "username")
var password = flag.String("password", "", "password")
var role = flag.String("role", "", "role")

func main() {
	flag.Parse()
	flag.Set("logtostderr", "true")

	runServer()
}

func runServer() {
	if *confPath == "" || *username == "" || *password == "" || *role == "" {
		flag.Usage()
		return
	}

	// load config
	conf, err := server.LoadConf(*confPath)
	if err != nil {
		glog.Fatal(err)
	}
	conf.DB.Reset = true

	// new Server
	s, err := server.New(conf, nil)
	if err != nil {
		glog.Fatal(err)
	}
	defer s.Free()

	if err := s.CreateUser(*username, *password, m.UserRole(*role)); err != nil {
		glog.Error(err)
		return
	}
}
