# tweb
程序化A股交易 WebUI

# 环境
- Golang 1.13.8
- Yarn 1.22.4
- Docker 18.09.2
- Docker-compose 1.23.2

# 快速开始
Tweb支持两种启动方式
* ### 1. Docker启动
    请先熟读[`conf-docker.yaml`](conf-docker.yaml)配置
    ```
    cd tweb
    make run_docker
    ```
    在浏览器中输入 [`http://localhost:8888`](http://localhost:8888) 访问  

* ### 2. 开发环境启动
    请先熟读[`conf.yaml`](conf.yaml)配置
    ```
    cd tweb

    # 启动数据库
    make up

    # 下载golang 第三方包
    go mod download

    # 启动后端
    make run

    # 启动前端
    cd frontend

    # 首次执行运行以下命令：
    make install

    # 启动前端
    make run
    ```

    在浏览器中输入 [`http://localhost:3030`](http://localhost:3030) 访问  

[![8mY5GD.png](https://s1.ax1x.com/2020/03/12/8mY5GD.png)](https://imgchr.com/i/8mY5GD)

# 相关项目
- [tbase](https://github.com/iminders/tbase)
- [tgym](https://github.com/iminders/tgym)

TODO (mickey)