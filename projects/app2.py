from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'aviationsafety_db'
COLLECTION_NAME = 'hundred_worst_accidents'
FIELDS = {'fatalities': True, 
          'date': True, 
          'type': True, 
          'registration': True, 
          'location ': True, 
          'Latitude': True, 
          'Longitude': True, 
          '_id': False}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/aviationsafety_db/hundred_worst_accidents")

def aviationsafety_db():
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