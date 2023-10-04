"use client"
import React, { useState } from 'react'
import axios from "axios"; // Import Axios

function ContactusForm() {
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
            message: formData.message,
          })
          .then(function (response) {
            if (response.data.status) {
              // Email sent successfully, you can show a success message here.
              alert("Email sent successfully!");
              window.location.reload();
            } else {
              // Handle errors here if the email failed to send.
              alert("Error sending the email. Please try again later.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            // Handle network or other errors here.
            console.error("Error:", error);
            alert("Error sending the email. Please try again later.");
            window.location.reload();
          });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
  return (
    <form onSubmit={handleFormSubmit}>
    <div className="row g-3">
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="name">Enter Your Name</label>
        </div>
      </div>
      {/* <div className="col-md-6">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            name="email"
value={formData.email}
onChange={handleInputChange}
required
          />
          <label htmlFor="email">Enter Your Email</label>
        </div>
      </div> */}
      <div className="col-12">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="your mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="subject">Enter Your Email</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a message here"
            id="message"
            style={{ height: 150 }}
            defaultValue={""}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="message">Message</label>
        </div>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary w-100 py-3"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
)
}

export default ContactusForm
