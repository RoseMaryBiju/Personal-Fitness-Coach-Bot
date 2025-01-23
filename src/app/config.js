// creation for our UI

import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "FitnessCoach",
  initialMessages: [
    createChatBotMessage("Hello! I am your personal Fitness Coach. Ready for your workout?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "black", // Bot's message background
      color: "white",          // Bot's message text color
    },
    userMessageBox: {
      backgroundColor: "black", // User's message background
      color: "white",           // User's message text color
    },
    chatButton: {
      backgroundColor: "#171717", // Chat button background
      color: "white",            // Chat button text color
    },
  },
  customComponents: {
    userAvatar: (props) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "orange", // Set the background color to orange
          borderRadius: "50%",       // Make the icon circular
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",            // Text/icon color
          fontWeight: "bold",
        }}
      >
        <span>🏋️‍♀️</span> {/* You can replace this with an SVG or emoji */}
      </div>
    ),
  },
};

export default config;
