from flask import Flask, jsonify, request, render_template_string
import google.generativeai as genai
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)

# Load the trained model

# Load the model correctly
with open("backend\models\wildlife_model.pkl", "rb") as file:
    model = pickle.load(file)
    
# # Define the API route
@app.route("/animals", methods=["POST"])
def predict_animals():
    try:
        data = request.json
        city = data.get("city")
        season = data.get("season")
        active = data.get("active")

        if not city or not season or not active:
            return jsonify({"error": "Missing required fields"}), 400

        # Create a DataFrame for prediction
        input_data = pd.DataFrame([[city, season, active]], columns=["city", "season", "active"])
        
        # Get predictions from the model
        predictions = model.predict(input_data)  # Assume model returns top 5 animals as a list
        
        return jsonify({"top_animals": predictions.tolist()})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask....!'})

# Set up Gemini API Key
API_KEY = "AIzaSyAltwKDLDCavSIWCzCiTMjx3gxX-jXxgcw"
genai.configure(api_key=API_KEY)

# Function to get response from Gemini API
def get_gemini_response(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text

# API Route to Handle Chat Requests
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    
    if not user_message:
        return jsonify({"error": "Message is required"}), 400
    
    bot_response = get_gemini_response(user_message)
    return jsonify({"response": bot_response})


if __name__ == '__main__':
    app.run(debug=True)
