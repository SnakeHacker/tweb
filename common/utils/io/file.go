package io

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"github.com/golang/glog"
)

//ReadLines ...
func ReadLines(filePath string) (lines []string, err error) {
	bytes, err := ioutil.ReadFile(filePath)
	if err != nil {
		return
	}

	content := string(bytes)
	lines = strings.Split(content, "\n")

	return
}

//DoesFileExist ...
func DoesFileExist(filePath string) bool {
	stat, err := os.Stat(filePath)
	if os.IsNotExist(err) {
		return false
	}
	if stat.IsDir() {
		return false
	}
	return true
}

//DoesDirExist ...
func DoesDirExist(dirPath string) bool {
	stat, err := os.Stat(dirPath)
	if os.IsNotExist(err) {
		return false
	}
	if !stat.IsDir() {
		return false
	}
	return true
}

//WriteFile ...
func WriteFile(outPath string, lines ...string) error {
	outFile, err := os.Create(outPath)
	if err != nil {
		return err
	}
	defer outFile.Close()

	out := bufio.NewWriter(outFile)
	for _, l := range lines {
		if _, err := fmt.Fprintln(out, l); err != nil {
			return err
		}
	}
	return out.Flush()
}

//CreateDirIfNotExist ...
func CreateDirIfNotExist(dirPath string) (err error) {
	if DoesDirExist(dirPath) {
		return
	}

	err = os.MkdirAll(dirPath, os.ModePerm)
	return
}

// MustCreateNewDir ...
func MustCreateNewDir(dirPath string) (err error) {
	if _, e := os.Stat(dirPath); !os.IsNotExist(e) {
		err = fmt.Errorf("folder %v exists", dirPath)
		glog.Error(err)
		return
	}
	if err = os.MkdirAll(dirPath, 0777); err != nil {
		glog.Error(err)
		return
	}
	return
}

// FilenameTrimExt ...
func FilenameTrimExt(filePath string) string {
	fullName := filepath.Base(filePath)
	ext := filepath.Ext(fullName)
	fileName := strings.TrimSuffix(fullName, ext)
	return fileName
}
