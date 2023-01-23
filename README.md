# Dockerize-Node-app
Following are the steps I took for containerizing a node.js server

1. Create / Clone a basic node.js server
2. Create a `Dockerfile` in project root folder 
3. Paste the following code in Dockerfile...
    ```
    FROM node:18-alpine
    WORKDIR /app
    COPY package* yarn.lock .
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["node","index.js"]
    ```
    Make sure the port exposed in Dockerfile is same as the port node.js server is listening to.
4. Build the image by running `docker build -t node-app .`
5. After the image is built, it can be listed by running `docker images`
6. Finally, we can create a container using the image created above by running `docker run -dp 3000:3000 node-app`
   This will run the container in a detached mode, list all the containers using `docker ps`
7. You've successfully dockerized your node.js server.
8. Currently your docker image is in your local machine, but what if you need to create your container on another machine ? We have a solution to this via pushing our image on container registeries such as DockerHub or ECR. Let's push our image on DockerHub for now
9. After creating an account and successfully logging in, create a new repository *node-server*. Your repository name will be <Username>/node-server
10. Open terminal, now we have to tag our image with repository name. We'll run this `docker --tag node-app Muzammil98/node-server`
11. Finally, we can now push our image. Run `docker push Muzammil98/node-server`

You have successfully dockerized your app and pushed to DockerHub
