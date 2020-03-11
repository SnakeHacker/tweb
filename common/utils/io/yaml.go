package io

import (
	"io/ioutil"

	yaml "gopkg.in/yaml.v2"
)

//SaveYAML ...
func SaveYAML(filePath string, data interface{}) (err error) {
	bytes, err := yaml.Marshal(data)
	if err != nil {
		return
	}

	if err = ioutil.WriteFile(filePath, bytes, 0644); err != nil {
		return
	}

	return
}

//LoadYAML ...
func LoadYAML(filePath string, dataPtr interface{}) (err error) {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return
	}
	err = yaml.UnmarshalStrict(content, dataPtr)
	return
}
