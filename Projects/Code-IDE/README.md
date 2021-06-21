## Web-Based Code IDE
This project is a online web based Code IDE which have support of over 5+ most popular programming languages.

## Working
- Frontend code editor, we can choose the language and edit and modify the code here. Then we make a post request to the backend API and show output on the website.

- API running on the backend server, which will take a piece of code and language as input and output the answer after running the code on the server.

***Note***: Backend of this code editor is a [judge0](https://judge0.com/) instance which is running in a my Azure VM.

- ### Setup of Judge0
***Note***: This setup is based on offical documentation of judge0 for [self hosted](https://github.com/judge0/judge0/blob/master/CHANGELOG.md#deployment-procedure) instance.

1. Install [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose).
2. Download and extract the release archive:
```bash
wget https://github.com/judge0/judge0/releases/download/v1.13.0/judge0-v1.13.0.zip
unzip judge0-v1.13.0.zip
```
3. Run all services and wait a few seconds until everything is initialized:
```bash
cd judge0-v1.13.0
docker-compose up -d db redis
sleep 10s
docker-compose up -d
sleep 5s
```
4. Your instance of Judge0 CE v1.13.0 is now available at http://<IP ADDRESS OF YOUR SERVER>:2358.

***Note***: I have already setup this judge0 instance so you don't need to do this(because if you do so you also have to make changes in source code of project) and it is running at http://40.80.89.241:2358


- ## Project Setup
1. Run the following commands in your terminal.
``` bash
git clone https://github.com/slashharsh/DevOps.git
cd DevOps/Code-IDE
docker build -t code-ide:v01 .
docker run -it -d -p 5001:80 code-ide:v01
docker ps #to check running containers
```
2. Project is now running in a container. It is available at http://< IP ADDRESS OF YOUR SERVER >:5001


