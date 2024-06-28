FROM node:18-alpine
WORKDIR /
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000