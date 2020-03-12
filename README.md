# tweb
程序化A股交易 WebUI

# 环境
- Golang 1.11.5
- Yarn 1.22.4
- Docker 18.09.2
- Docker-compose 1.23.2

# 快速开始
```
cd tweb
# 启动数据库
make up

# 启动后端
make run

# 首次执行请先创建用户
make create_admin

# 启动前端
cd frontend

# 首次执行运行以下命令：
make install

# 启动前端
make run
```

在浏览器中输入 `http://localhost:3030/view` 访问  

TODO (mickey)