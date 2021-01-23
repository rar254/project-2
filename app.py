from flask import Flask, render_template, redirect 
from flask_pymongo import PyMongo
import scrape_mars
import os

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/test_db"
mongo = PyMongo(app)


@app.route("/")
def home(): 

    twelve_year = mongo.db.twelve_year.find_one()
    return render_template("index.html", twelve_year=twelve_year)

@app.route("/scrape")
def scrape(): 

    twelve_year = mongo.db.twelve_year

#Instead of passing a function to scrape a website, I could just take data from the database.

    mars_data = scrape_mars.scrape_mars_news()
    mars_data = scrape_mars.scrape_mars_image()
    mars_f = scrape_mars.scrape_mars_facts()
    mars_data = scrape_mars.scrape_mars_hemispheres()
    mars_info.update({}, mars_data, upsert=True)

    return redirect("/", code=302)

if __name__ == "__main__": 
    app.run(debug= True)
