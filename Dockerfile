FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/build /usr/share/nginx/html
