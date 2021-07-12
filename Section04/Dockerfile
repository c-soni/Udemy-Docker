# Base image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Additional config steps
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Startup command
CMD ["npm", "start"]
