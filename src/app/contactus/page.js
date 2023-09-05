"use client";
import React, { useState } from "react";
import styles from "./ContactUs.css";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios"; // Import Axios


function ContactUs() {
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
    <div className="soon">
      <div className="containerr">
        <div className="wrapperr">
          <div className="contentt">
            <div className="aboutus">
              <div className="containers">
                <div className="contents">
                  <div className="left-side">
                    <div className="address details">
                      <i className="fas fa-map-marker-alt">
                        <FaMapMarkerAlt />
                      </i>
                      <div className="topic">Address</div>
                      <a
                        className="text-one"
                        href="https://www.google.com/maps/place/Cyberpark+Kozhikode/@11.2863612,75.7940973,13z/data=!4m10!1m2!2m1!1skozhikode+it+park!3m6!1s0x3ba65b946032ba75:0xf5ed91156d32a4f2!8m2!3d11.2541826!4d75.8370307!15sChFrb3poaWtvZGUgaXQgcGFya5IBD3RlY2hub2xvZ3lfcGFya-ABAA!16s%2Fg%2F1v6p78_h?entry=ttu"
                      >
                        kerala, Cyberpark
                      </a>
                      <br />
                      <a
                        className="text-two"
                        href="https://www.google.com/maps/place/Cyberpark+Kozhikode/@11.2863612,75.7940973,13z/data=!4m10!1m2!2m1!1skozhikode+it+park!3m6!1s0x3ba65b946032ba75:0xf5ed91156d32a4f2!8m2!3d11.2541826!4d75.8370307!15sChFrb3poaWtvZGUgaXQgcGFya5IBD3RlY2hub2xvZ3lfcGFya-ABAA!16s%2Fg%2F1v6p78_h?entry=ttu"
                      >
                        kozikkode{" "}
                      </a>
                    </div>
                    <div className="phone details  ">
                      <i className="fas fa-phone-alt">
                        <FaPhone />
                      </i>
                      <div className="topic">Phone</div>
                      <a className="text-one" href="tel:+918899908450">
                        +91-8899908450
                      </a>
                      <br />
                      <a className="text-two" href="tel:+919048116962">
                        +91-9048116962
                      </a>
                    </div>
                    <div className="email details">
                      <i className="fas fa-envelope">
                        <FaEnvelope />
                      </i>
                      <div className="topic">Email</div>
                      <a href="mailto:contact@wexorai.com" className="text-one">
                        contact@wexorai.com
                      </a>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="topic-text"> SENT US A MESSAGE </div>
                    <p>
                      Feel free to reach out with any questions or inquiries you
                      may have. I'm here to assist you and provide the help you
                      need.
                    </p>
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
                            <button className="button2">🡨 BACK to home</button>
                          </Link>

                          <button type="submit" className="button2">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactUsPage = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/clientmessagef3', {
//         email: email,
//         message: message,
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label>Message:</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUsPage;
