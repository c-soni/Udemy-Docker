# Base image
FROM node:alpine

# Working directory
WORKDIR '/app'

# Additional config
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Startup command
CMD ["npm", "start"]
