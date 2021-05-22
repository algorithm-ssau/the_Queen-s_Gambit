from flask import json
from flask_pymongo import PyMongo
import flask

app = flask.Flask(__name__)
app.config[
    "MONGO_URI"] = "mongodb+srv://gvazyukova:12qwerty345@cluster0.pfi79.mongodb.net/theQueensGambit?retryWrites=true&w=majority"
mongo = PyMongo(app)



@app.route("/episodes", methods=['GET'])
def get_episodes():
    episodes = mongo.db.episodes.find()
    data = []
    for episode in episodes:
        item = {
            "number": episode["number"],
            "name": episode["name"],
            "description": episode["description"]
        }
        data.append(item)
    return json.dumps(data, ensure_ascii=False).encode('utf8')


if __name__ == '__main__':
    app.run(port=2000)