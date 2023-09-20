"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css"; // Make sure to adjust the path to your CSS file
import { Button } from "antd";
import { title } from "process";
import Image from "next/image";

function Chatbot() {
  const [botMessage, setBotMessage] = useState("Loading...");
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(false);

  function getBotResponse(input) {
    if (input === "hellow") {
      return "Hi there! How can I assist you today?";
    } else if (input === "yes") {
      return "Absolutely! I d be glad to help you";
    } else if (input === "hi") {
      return "Hi there! How can I assist you today?";
    } else if (input === "yes") {
      return "Absolutely! I d be glad to help you";
    }
    if (input === "whatsapp") {
      return "Hello there!";
    } else if (input === "goodbye") {
      return "Talk to you later!";
    } else {
      return "Try asking something else!";
    }
  }

  function toggleCollapsible() {
    setIsActive((prevState) => !prevState);
  }

  function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    setBotMessage(botResponse);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, isBot: true },
    ]);
  }

  useEffect(() => {
    firstBotMessage();
  }, []);

  function firstBotMessage() {
    let firstMessage = "May I help you today?";
    setBotMessage(firstMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: firstMessage, isBot: true },
    ]);
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleInputKeyPress(event) {
    if (event.key === "Enter") {
      getResponse();
    }
  }

  function handleSendButtonClick() {
    getResponse();
  }

  function getResponse() {
    let userText = inputText.trim();
    if (userText === "") {
      return; // Don't send empty messages
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userText, isBot: false },
    ]);
    setInputText("");

    setTimeout(() => {
      // getHardResponse(userText);
      sendUserMessage(userText);
    }, 1500);
  }

  function sendUserMessage(text) {
    const requestData = {
      client_id: "wexorai",
      user_id: "abc2",
      chat: text,
    };

    axios
      .post("https://chatbot.wexorai.com/chat", requestData)
      .then(function (response) {
        const botResponse = response.data.response;
        setBotMessage(botResponse);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isBot: true },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="chat-bar-collapsible ">
      <div className={`content ${isActive ? "active" : ""}`}>
        {/* header */}
        <div className="chatbot-header  text-center">
          <div className="h5">
            Hi <span>USER</span>
          </div>
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="./chatIcon.png"
              alt="Login Image"
              width={50}
              height={50}
            />
          </div>
          <div className="text-center fw-bold mx-3 mb-0">
            Our bot answers instantly
          </div>
        </div>
        <div />
        <div className="full-chat-block">
          <div className="outer-container">
            <div className="chat-container">
              <div id="chatbox">
                <h5 id="chat-timestamp"></h5>
                {messages.map((message, index) => (
                  <p
                    key={index}
                    className={message.isBot ? "botText" : "userText"}
                  >
                    <span>{message.text}</span>
                  </p>
                ))}
              </div>

              <div className="chat-bar-input-block">
                <div id="userInput ">
                  <input
                    id="textInput"
                    className="input-box"
                    type="text"
                    name="msg"
                    placeholder="Tap 'Enter' to send a message"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                  />
                  <p></p>
                </div>

                <div className="chat-bar-icons">
                  <Button
                    className="btn  text-white"
                    style={{ color: "#333" }}
                    onClick={handleSendButtonClick}
                  >
                    sent
                  </Button>
                </div>
              </div>

              <div id="chat-bar-bottom">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="./chatIcon.png"
        alt="Login Image"
        width={90}
        height={90}
        type="button"
        className="collapsible "
        onClick={toggleCollapsible}
      />
    </div>
  );
}

export default Chatbot;
