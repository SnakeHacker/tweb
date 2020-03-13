# build image
FROM mickeyzhoudocker/devel:latest AS build

ENV PROJECT_PATH=/go/src/github.com/SnakeHacker/tweb
COPY common ${PROJECT_PATH}/common
COPY frontend ${PROJECT_PATH}/frontend
COPY main ${PROJECT_PATH}/main
COPY proto ${PROJECT_PATH}/proto
COPY server ${PROJECT_PATH}/server
COPY Makefile ${PROJECT_PATH}/Makefile
COPY proto.sh ${PROJECT_PATH}/proto.sh

WORKDIR ${PROJECT_PATH}
RUN go mod init && go mod tidy
RUN make build_linux

# run-time image
FROM alpine

ENV PROJECT_PATH=/go/src/github.com/SnakeHacker/tweb

COPY --from=build ${PROJECT_PATH}/main/server /

ENTRYPOINT ["/server", "-c", "/conf.yaml"]