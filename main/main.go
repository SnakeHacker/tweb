package main

import (
	"flag"

	"github.com/SnakeHacker/tweb/server"
	packr "github.com/gobuffalo/packr/v2"
	"github.com/golang/glog"
)

var confPath = flag.String("c", "", "Path to the conf file")

var frontend = packr.New("frontend", "../frontend/build")

func main() {
	flag.Parse()
	flag.Set("logtostderr", "true")

	runServer()
}

func runServer() {
	if *confPath == "" {
		flag.Usage()
		return
	}

	// load config
	conf, err := server.LoadConf(*confPath)
	if err != nil {
		glog.Fatal(err)
	}

	// new Server
	s, err := server.New(conf, frontend)
	if err != nil {
		glog.Fatal(err)
	}
	defer s.Free()

	// start server
	err = s.StartOrDie()
	if err != nil {
		glog.Fatal(err)
	}
}
