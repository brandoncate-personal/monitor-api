docker-build:
	docker build -t brandoncate/monitor-api:v0.0.1 .

docker-run:
	docker run -p 3000:3000 -it brandoncate/monitor-api:v0.0.1

compose-run:
	docker-compose up --build -V