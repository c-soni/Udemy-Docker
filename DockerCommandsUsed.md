# All commands used in the course:

## Section 01:

- `docker version`
- `docker login`
- `docker run hello-world`

## Section 02:

- `docker run busybox echo hi there`
- `docker run busybox ls`
- `docker ps`
- `docker run busybox ping google.com`
- `docker ps --all`
- `docker create busybox echo hello world`
- `docker start -a 2711<redacted>2b2b`
- `docker system prune`
- `docker logs 9b32<redacted>7c68`
- `docker stop 9b32<redacted>7c68`
- `docker kill 9b32<redacted>7c68`
- `docker run redis`
- `docker exec -it 26e75434b7e1 redis-cli`
- `docker exec -it 0a07ef24178e sh`
- `docker run -it busybox sh`

## Section 03:

- `docker build .`
- `docker build -t csoni/redis-demo:latest .`
- `docker commit -c 'CMD ["redis-server"]' 474ea3e6a16f`

## Section 04:

- `docker run -p 8080:8080 csoni/webserver`

## Section 05:

- `docker-compose`
- `docker-compose up`
- `docker-compose up --build`
- `docker run -d redis`
- `docker-compose up -d`
- `docker-compose down`
- `docker-compose ps`

## Section 06:

- `docker run -p 3000:3000 -v $(pwd):/app <image_id>`
- `docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>`
