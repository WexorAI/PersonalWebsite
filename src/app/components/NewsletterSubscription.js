"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = () => {
    const data = {
      client_id: "wexorai",
      mail: email,
    };

    axios
      .post("https://chatbot.wexorai.com/savemails", data)
      .then((response) => {
        setMessage(response.data.message);
        alert("Email sent successfully")
        window.location.reload();
      })
      .catch((error) => {
        setMessage(error);
        console.log(error);
        alert("Email already in database. Send new email.")
        window.location.reload();
      });
  };

  return (
    <div className="position-relative w-100 mt-3 mb-2">
      <input
        className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
        type="email"
        name="email"
        placeholder="Enter Your Email"
        style={{ height: 48 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="button"
        className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
        onClick={subscribe}
      >
        <FaPaperPlane className="text-primary fs-4" />
      </button>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
};

export default NewsletterSubscription;
