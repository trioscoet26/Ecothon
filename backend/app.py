from flask import Flask, jsonify, request, render_template_string
import pickle
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model once when the app starts
with open('wildlife_model.pkl', 'rb') as f:
    model = pickle.load(f)
    
    
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask....!'})


if __name__ == '__main__':
    app.run(debug=True)
