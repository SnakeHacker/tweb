package web

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/golang/glog"
)

// OK ...
func OK(w http.ResponseWriter) {
	w.WriteHeader(http.StatusOK)
}

// InternalError ...
func InternalError(w http.ResponseWriter, err error) {
	http.Error(w, err.Error(), http.StatusInternalServerError)
}

// NotFound ...
func NotFound(w http.ResponseWriter) {
	http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
}

// BadRequest ...
func BadRequest(w http.ResponseWriter, err error) {
	http.Error(w, err.Error(), http.StatusBadRequest)
}

// Unauthorized ...
func Unauthorized(w http.ResponseWriter) {
	http.Error(w, "", http.StatusUnauthorized)
}

// RespondJSON ...
func RespondJSON(w http.ResponseWriter, payload interface{}) {
	js, err := json.Marshal(payload)
	if err != nil {
		glog.Error(err)
		InternalError(w, err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// RespondText ...
func RespondText(w http.ResponseWriter, text string) {
	w.Header().Set("Content-Type", "plain/text")
	w.Write([]byte(text))
}

// ReadJSONBody ...
func ReadJSONBody(body io.ReadCloser, data interface{}) error {
	decoder := json.NewDecoder(body)
	defer body.Close()
	if e := decoder.Decode(data); e != nil {
		return e
	}
	return nil
}
