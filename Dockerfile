FROM node:19.7.0-slim
WORKDIR /app
COPY package* .
RUN npm install --production
COPY . .
ENV NODE_ENV="testing" PORT="5000"
EXPOSE 5000
CMD ["npm","start"]