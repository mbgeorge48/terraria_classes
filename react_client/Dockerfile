# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /terraria-react

COPY . .
RUN yarn install

EXPOSE 5173
CMD ["yarn", "start"]