from flask import Flask,jsonify, render_template
import pymongo
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

# setup mongo connection
MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'project_two'
COLLECTION_NAME = 'continents'
FIELDS = {'number': True, 'continent': True, 'accidents': True, 'fatalities': True, 'ground fat': True, 'Latitude': True, 'Longitude': True, '_id': False}

# connect to mongo db and collection
connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
collection = connection[DBS_NAME][COLLECTION_NAME]
projects = collection.find(projection=FIELDS)

@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    inventory = list(produce.find())
    print(inventory)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", inventory=inventory)

@app.route("/json-data-continents")
def continents_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Route to render visualization by querying web api from JavaScript
@app.route("/js-using-web-api2")
def js_using_web_api2():
    return render_template("index.html")

# Route that will return Web API JSON data
#Retrieve our MongoDB Data collection:
@app.route("/json-data")
def worst_geo_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

# Route to render visualization by querying web api from JavaScript
@app.route("/js-using-web-api")
def js_using_web_api():
    return render_template("js-using-web-api.html")

# Function that queries database and returns a dictionary
def worst_geo_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

if __name__ == "__main__":
    app.run(debug=True)