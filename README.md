Create a file .env in root directory and add the following content
```
# .env
PORT=8000
NODE_ENV=development
```

Dockerize-Node-app
Following are the steps I took for containerizing a node.js server

Create / Clone a basic node.js server
Create a Dockerfile in project root folder
Paste the following code in Dockerfile...
```
FROM node:19.7.0-slim
WORKDIR /app
COPY package* .
RUN npm install --production
COPY . .
ENV NODE_ENV="testing" PORT="5000"
EXPOSE 5000
CMD ["npm","start"]
```
Make sure the port exposed in Dockerfile is same as the port node.js server is listening to.
Build the image by running docker build -t node-app .
After the image is built, it can be listed by running docker images
Finally, we can create a container using the image created above by running docker run -dp 3000:3000 node-app This will run the container in a detached mode, list all the containers using docker ps
You've successfully dockerized your node.js server.
Currently your docker image is in your local machine, but what if you need to create your container on another machine ? We have a solution to this via pushing our image on container registeries such as DockerHub or ECR. Let's push our image on DockerHub for now
After creating an account and successfully logging in, create a new repository node-server. Your repository name will be [Username]/node-server
Open terminal, now we have to tag our image with repository name. We'll run this docker tag node-app Muzammil98/node-server
Finally, we can now push our image. Run docker push Muzammil98/node-server
You have successfully dockerized your app and pushed to DockerHub