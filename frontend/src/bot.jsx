import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        message: userInput,
      });

      const botReply = response.data.response || "Sorry, I didn't understand.";
      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { sender: "bot", text: "Server error." }]);
    }

    setUserInput("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6 relative"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/dark-nature-1920-x-1080-background-lqtolhf1sfr3ve5s.jpg')",
      }}
    >
      {/* Chat Container */}
      <div className="max-w-md w-full bg-black bg-opacity-90 shadow-xl rounded-xl p-4 border-4 border-yellow-500 relative z-10 flex flex-col">
        <h2 className="text-xl font-extrabold text-center text-yellow-400 flex items-center justify-center gap-2">
          🦁 Wildlife Chatbot
        </h2>

        {/* Chat Messages Area */}
        <div className="flex flex-col max-h-80 overflow-y-auto p-2 rounded-lg bg-gray-900 shadow-inner space-y-2 border-2 border-yellow-500">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 max-w-[80%] inline-block font-semibold shadow-md text-sm ${
                msg.sender === "user"
                  ? "bg-yellow-400 text-black self-end ml-auto border-2 border-yellow-600 rounded-[1.6rem] px-4 py-2"
                  : "bg-green-900 text-white self-start border-2 border-green-200 rounded-lg px-4 py-2"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Field & Send Button (Now at the Bottom) */}
        <div className="flex mt-4 items-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Trigger sendMessage on Enter key
            placeholder="Ask about wildlife..."
            className="flex-1 p-2 border-2 border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-800 text-yellow-300 placeholder-yellow-400 text-sm"
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center gap-2 font-bold shadow-md text-sm"
          >
            🦁 Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
