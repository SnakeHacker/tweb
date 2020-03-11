package web

import (
	"net/http"

	"github.com/golang/glog"
)

// NotFoundHandler ...
type NotFoundHandler struct {
}

func (h *NotFoundHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	glog.Infof("404: %s %s", r.Method, r.RequestURI)
	NotFound(w)
}

// MethodNotAllowedHandler ...
type MethodNotAllowedHandler struct {
}

func (h *MethodNotAllowedHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	glog.Infof("405: %s %s", r.Method, r.RequestURI)
	http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
}
