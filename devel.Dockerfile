FROM ubuntu:18.04

Label maintainer="zmjhacker@gmail.com"

RUN sed -i "s/archive.ubuntu.com/mirrors.aliyun.com/g" /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y curl wget apt-transport-https gnupg ssh git unzip libopenblas-dev liblapack-dev libssl-dev libmetis-dev pkg-config zlib1g-dev

# Install nodejs yarn
ENV NODEJS_VERSION 12
RUN curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION}.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN	echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install -y build-essential yarn
RUN rm -rf /var/lib/apt/lists/*

# Install Golang
ENV GO_VERSION 1.13.8
RUN wget https://storage.googleapis.com/golang/go${GO_VERSION}.linux-amd64.tar.gz
RUN tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz && \
	rm go${GO_VERSION}.linux-amd64.tar.gz
ENV PATH /usr/local/go/bin:$PATH

RUN mkdir -p /go/src /go/bin && chmod -R 777 /go
ENV GOROOT /usr/local/go
ENV GOPATH /go
ENV PATH /go/bin:$PATH

# Install go packages
RUN go env -w GO111MODULE=on && \
	go env -w GOPROXY=https://goproxy.io,direct
COPY go.mod /go.mod
RUN go mod download

# Install proto buffer
# refer to https://github.com/golang/protobuf
ARG PROTOBUF_VERSION=3.6.1
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protoc-${PROTOBUF_VERSION}-linux-x86_64.zip
RUN unzip protoc-${PROTOBUF_VERSION}-linux-x86_64.zip -d protoc3 && \
	rm protoc-${PROTOBUF_VERSION}-linux-x86_64.zip
RUN mv protoc3/bin/* /usr/local/bin/ && mv protoc3/include/* /usr/local/include/

# Install GoLang proto gen
RUN go get -u -v github.com/golang/protobuf/protoc-gen-go

# Manually clone golang.org/x/XXX packages from their github mirrors.
# F**K GFW!
WORKDIR /go/src/golang.org/x/
RUN git clone --progress https://github.com/golang/debug.git
RUN git clone --progress https://github.com/golang/glog.git
RUN git clone --progress https://github.com/golang/time.git
RUN git clone --progress https://github.com/golang/sync.git
RUN git clone --progress https://github.com/golang/crypto
RUN git clone --progress https://github.com/golang/tools
RUN git clone --progress https://github.com/golang/sys

# Install packr2
RUN go get -u github.com/gobuffalo/packr/v2/packr2

WORKDIR /go