.PHONY: proto build_linux build_darwin

CONF=$(shell pwd)/conf.yaml
GOPKG=github.com/SnakeHacker/tweb
DEV_LDFLAGS="\
	-X $(GOPKG)/server.buildGitCommitHash=$(shell git rev-parse --short HEAD) \
	-X $(GOPKG)/server.buildGitCommitTime=$(shell git log -1 --format=%cd --date=iso-strict) \
"
LDFLAGS="\
	-X $(GOPKG)/server.buildGitCommitHash=$(shell git rev-parse --short HEAD) \
	-X $(GOPKG)/server.buildGitCommitTime=$(shell git log -1 --format=%cd --date=iso-strict) \
"

up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down

proto:
	bash proto.sh

run:
	go run main/main.go -c=conf.yaml

create_admin:
	go run cmd/user/main.go -c=conf.yaml -username=admin -password=admin -role=administrator

build_linux: proto
	cd frontend && make build
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 packr2 build -ldflags $(LDFLAGS) -o server main/main.go

build_darwin: proto
	cd frontend && make build
	GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 packr2 build -ldflags $(LDFLAGS) -o server main/main.go
