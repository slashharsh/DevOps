## Flask-MongoDB CRUD Application
This is simple Flask-MongoDB API for Create, Read, Update, Delete(CRUD) operations.

The entire application is contained within the `main.py` file.
 
## Working
### API Documentation

##### GET Request
- Get all the details of a person exists in the database.

`GET /get/<name>/`
 http://127.0.0.1:5000/get/harsh


##### POST Request
- Put the person entry in database.

`POST /get/<name>/<dept>/<age>`
 http://127.0.0.1:5000/post/harsh/CSE/21

 ##### DELETE Request
- Delete a person from database using name.

`DELETE /delete/<name>/`
 http://127.0.0.1:5000/delete/harsh

 ##### PUT Request
- Update value for department (dept) using name.

`PUT /update/<name>/<dept>`
 http://127.0.0.1:5000/update/harsh/ME

## Setup
1. Install [Docker](docs.docker.com) and [Docker Compose](docs.docker.com/compose).
2. Run the following commands.
```bash
git clone https://github.com/slashharsh/Devops.git
cd DevOps/Flask-crud
docker-compose build
docker-compose up
```
3. Project is up and running in a container.It is available at http://< IP ADDRESS OF YOUR SERVER >:5000

***Note***: If you run app on any server (Cloud Instance etc.) then use IP accordingly.
