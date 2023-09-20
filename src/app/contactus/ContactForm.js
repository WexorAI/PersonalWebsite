"use client";
import Link from "next/link";
import axios from "axios"; // Import Axios

import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send data to your Node.js server
    axios
      .post("https://chatbot.wexorai.com/clientmessagef3", {
        client_id: "wexorai",
        name: formData.name,
        email: formData.email,
        subject: "nothing",
        message: formData.message,
      })
      .then(function (response) {
        if (response.data.status) {
          // Email sent successfully, you can show a success message here.
          alert("Email sent successfully!");
        } else {
          // Handle errors here if the email failed to send.
          alert("Error sending the email. Please try again later.");
        }
      })
      .catch(function (error) {
        // Handle network or other errors here.
        console.error("Error:", error);
        alert("Error sending the email. Please try again later.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-box">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-box message-box">
        <input
          type="text"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <div>
          <Link legacyBehavior href="/">
            <button className="button2">🡨 BACK</button>
          </Link>

          <button type="submit" className="button2">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
