package server

import (
	"net/http"

	"github.com/SnakeHacker/tweb/common/utils/web"
	"github.com/golang/glog"
	"github.com/gorilla/mux"
)

func (s *Server) handleFrontend(router *mux.Router) *mux.Router {
	router.PathPrefix(`/view/`).HandlerFunc(s.frontendAnno).Methods("GET")
	return router
}

func (s *Server) frontendAnno(w http.ResponseWriter, r *http.Request) {
	html, err := s.Frontend.FindString("index.html")
	if err != nil {
		glog.Error(err)
		web.InternalError(w, err)
		return
	}
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(html))
}
