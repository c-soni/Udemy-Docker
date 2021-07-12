# Base image
FROM alpine

# Additional config steps
RUN apk add --update gcc
RUN apk add --update redis

# Startup command
CMD ["redis-server"]
