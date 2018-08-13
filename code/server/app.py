from flask import Flask, render_template, request
from flask_restful import Resource, Api, request, reqparse
from flask_jwt import JWT, jwt_required, current_identity
from sqlalchemy.dialects.postgresql import JSON

from security import authenticate, identity
from db import db


app = Flask(__name__, static_folder="../static/dist", template_folder="../static/public")
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/forego'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'hunter'
api = Api(app)


jwt = JWT(app, authenticate, identity)

@app.route("/")
def index():
	return render_template("index.html")

if __name__ == "__main__":
  db.init_app(app)
  app.run(port=5000, debug=True)