from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.secret_key = "secretkey"

app.config['MONGO_URI'] = "mongodb://localhost:27017/Users"

mongo = PyMongo(app)


@app.route('/add', methods=['POST'])
def add_user():
    json = request.json
    name = json["name"]
    email = json["mail"]
    password = json["pwd"]

    if name and email and password and request.method == 'POST':
        
        id = mongo.db.user.insert(
            {'name': name, 'email': email, 'password': password})
        
        response = jsonify("User is added successfully!")
        response.status_code = 200
        return response
    
    else:
        return "Details not added properly!"






if __name__ == "__main__":
    app.run(debug=True)