from flask import Flask,jsonify, render_template, request, url_for, redirect
import pymongo
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

# setup mongo connection
PERIOD_MONGODB_HOST = 'localhost'
PERIOD_MONGODB_PORT = 27017
PERIOD_DBS_NAME = 'project_two'
PERIOD_COLLECTION_NAME = 'period_time'
PERIOD_FIELDS = {'Airliner Accidents': True, 'Airliner Fatalities': True, 'Corp jet Accidents': True, 'Corp jet Fatalities': True,
'Hijacking Fatalities': True, 'Hijackings': True, 'Year': True, '_id': False}


# connect to mongo db and collection
period_connection = MongoClient(PERIOD_MONGODB_HOST, PERIOD_MONGODB_PORT)
period_collection = period_connection[PERIOD_DBS_NAME][PERIOD_COLLECTION_NAME]
period_projects = period_collection.find(projection=PERIOD_FIELDS)

#This is the home route and is unnecessary for my code specifically. You can use your own home route.
@app.route("/")
def test():
    return render_template("index.html")

# Team page
@app.route("/team_stuff")
def team_things():
    return render_template("team.html")

#This route is where the json data is grabbed by D3. SCRIPT.JS IS NECESSARY JAVASCRIPT FOR MY CODE, AND IT MUST BE IN THE STATIC FOLDER.
@app.route("/api_silliness")
def scrape():
    intel = get_json()
    return jsonify(intel)

#This route is where the json data is grabbed from mongo (period_time collection). It's specifically done by the function
#get_json, which is referenced above by variables.
@app.route('/period_data')

def get_json():

    period_connection = MongoClient(PERIOD_MONGODB_HOST, PERIOD_MONGODB_PORT)
    period_collection = period_connection[PERIOD_DBS_NAME][PERIOD_COLLECTION_NAME]
    period_projects = period_collection.find(projection=PERIOD_FIELDS)

    sum_accidents = []
    ze_years = []
    json_projects = []

    for period_project in period_projects:
        json_projects.append(period_project)
    period_connection.close()

    index = 0

    for i in range(len(json_projects)):
        sum_accidents.append(sum([
            int(json_projects[i]["Airliner Accidents"]), int(json_projects[i]["Airliner Fatalities"]),
            int(json_projects[i]["Corp jet Accidents"]), int(json_projects[i]["Corp jet Fatalities"]),
            int(json_projects[i]["Hijacking Fatalities"]), int(json_projects[i]["Hijackings"])
            ]))
        ze_years.append(json_projects[i]["Year"])
        index += 1

    dictios = [{"year": ze_year, "total_accidents": sum_accident} for (sum_accident, ze_year) in zip(sum_accidents, ze_years)]
    return dictios

###############

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

@app.route("/marker_map")
def map_things():
    return render_template("heatmaps.html")

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





if __name__ == '__main__':
    app.run()
