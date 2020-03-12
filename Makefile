.PHONY: proto

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