from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
CORS(app)  # Allow React to access Flask

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

# Run Flask Server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
