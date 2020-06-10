"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db
from api.utils import generate_sitemap
#from models import Person

api = Blueprint('api', __name__)
todos = {
    "task": "homework",
    "task2": "school",
    "task3": "hell"
}


@api.route('/get', methods=['GET'])
def handle_get():

    response_body = todos

    return jsonify(response_body), 200

@api.route('/post/<new_task>', methods=['POST'])
def handle_post(new_task):

    tmpdict = todos.update({"new-task":new_task})
    response_body = tmpdict

    return jsonify(response_body), 200

@api.route('/delete/<key>', methods=['DELETE'])
def handle_delete(key):

    if key in todos.keys():
        response_body = todos.pop(key)

    return jsonify(response_body), 200