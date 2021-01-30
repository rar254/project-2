@app.route("/aviationsafety_db/continents")
def aviationsafety_db_continents():
        connection = MongoClient(MONGODB_HOST,MONGODB_PORT)
        collection = connection[DBS_NAME][COLLECTION_NAME]
        aviationsafety_db = collection.find(projection=FIELDS, limit=100000)
        json_aviationsafety_db = []
        for aviationsafety_db in aviationsafety_dbs:
              json_aviationsafety_db.append(continents)
        json_aviationsafety_db =json.dumps(json_aviationsafety_db,default=json_util.default)
        connection.close()
        return json_aviationsafety_db

if __name__ == "__main__":
        app.run(host='127.0.0.1', port=5500,debug=True)
