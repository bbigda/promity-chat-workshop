# Stage 1: Build the Angular app
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2: Set up the nginx server
FROM nginx:1.21-alpine
COPY --from=build /app/dist/jira2angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
