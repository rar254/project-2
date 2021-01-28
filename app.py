from flask import Flask,jsonify, render_template, request, url_for, redirect
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
COLLECTION_NAME = 'period_time'
FIELDS = {'Airliner Accidents': True, 'Airliner Fatalities': True, 'Corp jet Accidents': True, 'Corp jet Fatalities': True, 
'Hijacking Fatalities': True, 'Hijackings': True, 'Year': True, '_id': False}


# connect to mongo db and collection
connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
collection = connection[DBS_NAME][COLLECTION_NAME]
projects = collection.find(projection=FIELDS)

@app.route("/")
def test():
    return render_template("index.html")

@app.route("/api_data")
def scrape():
    intel = get_json()

    return jsonify(intel)

@app.route("/ze_bar")
def chart_builder():
    intel = get_json()
    
    #The html for the pie chart is rendered and the pie chart data is placed
    return render_template("chartjs_bar.html", bar=intel)

@app.route('/period_data')
def pie_chart():
    return render_template("index.html")

#LET IT BE KNOWN THAT IF ANY HTML NEEDS THE JSON DATA, IT SHOULD USE THE FUNCTION "get_json"
def get_json():

    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS)

    sum_accidents = []
    ze_years = []
    json_projects = []

    for project in projects:
        json_projects.append(project)
    connection.close()
    
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

if __name__ == '__main__':
    app.run()
