up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down

run:
	go run main/main.go -c=conf.yaml

create_user:
	go run cmd/user/main.go -c=conf.yaml -username=admin -password=admin -role=administrator