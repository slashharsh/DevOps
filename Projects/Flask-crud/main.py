# Basic Flask app for CRUD operations on MongoDB #

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import os
# Initializing Flask and MongoDB. #

app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://" + \
    os.environ["DB_PORT_27017_TCP_ADDR"] + ":27017/Users"
mongo = PyMongo(app)

# Landing Route #


@app.route('/')
def hello_world():
    return "Hello from Flask App"

# READ Operation: Reads the records from database based on name attribute. #


@app.route('/get/<name>', methods=['GET'])
def get_user(name):
    value = list(mongo.db.user.find({"name": name}))
    response = str(value)
    return response

# CREATE Operation: Inserts the value to the database. #


@app.route('/post/<name>/<dept>/<age>', methods=['POST'])
def add_user(name="ABC", dept="abc", age=1):
    if name and dept and age and request.method == 'POST':
        id = mongo.db.user.insert({'name': name, 'dept': dept, 'age': age})
        response = "User added successfully!"
        return response
    else:
        return "User not added!"

#DELETE Operation: Delete a record from the database based on name attribute. #


@app.route('/delete/<name>', methods=['DELETE'])
def delete_user(name):
    mongo.db.user.delete_one({'name': name})
    response = jsonify("User deleted successfully")
    return response

# UPDATE Operation: Update existing value of "dept" in the database of a name attribute. #


@app.route('/update/<name>/<dept>', methods=['PUT'])
def update_user(name=None, dept=None):
    mongo.db.user.update_one({"name": name}, {'$set': {'dept': dept}})
    response = jsonify("User updated successfully")
    return response

# Defining main


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
