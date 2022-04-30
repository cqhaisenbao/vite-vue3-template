FROM node:16.14.0-alpine3.15 AS builder
WORKDIR /src
COPY package.json .
RUN yarn global add pnpm && pnpm i --prod
COPY . .
RUN pnpm run build

FROM nginx
COPY --from=builder /src/dist /usr/share/nginx/html
EXPOSE 80