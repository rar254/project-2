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
COLLECTION_NAME = 'worst_geo'
FIELDS = {'number': True, 'country': True, 'accidents': True, 'fatalities': True, 'ground fat': True, 'Latitude': True, 'Longitude': True, '_id': False}

# connect to mongo db and collection
connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
collection = connection[DBS_NAME][COLLECTION_NAME]
projects = collection.find(projection=FIELDS)

#This is an EXTRA BAR CHART that we have as backup because Tyler created the dashboard
# @app.route("/")
# def index():

#     return render_template("index_test.html")

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
@app.route("/marker")
def js_using_web_api():
    return render_template("index_marker.html")

# Route to render visualization by querying web api from JavaScript
@app.route("/bubble")
def sunburst():
    return render_template("bubble.html")

@app.route("/bubble-data")
def sunburst_data():

    MONGODB_HOST = 'localhost'
    MONGODB_PORT = 27017
    DBS_NAME = 'project_two'
    COLLECTION_NAME = 'hundred_worst'
    FIELDS = {'fatalities': True, 'date': True, 'type': True, 'registration': True, 'operator': True, 'location': True, 'Latitude': True, 'Longitude': True, '_id': True}

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
@app.route("/multiple")
def multiple():
    return render_template("multiple.html")


if __name__ == "__main__":
    app.run(debug=True)
