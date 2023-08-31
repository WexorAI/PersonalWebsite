import React from "react";
import styles from "./ContactUs.css";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
// import Link from "next/link";

function ContactUs() {
  return (
    <div className="soon">
      <div class="containerr">
        <div class="wrapperr">
          <div class="contentt">
            <div className="aboutus">
              <div className="containers">
                <div className="contents">
                  <div className="left-side">
                    <div className="address details">
                      <i className="fas fa-map-marker-alt">
                        <FaMapMarkerAlt />
                      </i>
                      <div className="topic">Address</div>
                      <div className="text-one">kerala, infopark</div>
                      <div className="text-two">kozikkode </div>
                    </div>
                    <div className="phone details">
                      <i className="fas fa-phone-alt">
                        <FaPhone />
                      </i>
                      <div className="topic">Phone</div>
                      <div className="text-one">+91-8899908450</div>
                      <div className="text-two">+91-9048116962</div>
                    </div>
                    <div className="email details">
                      <i className="fas fa-envelope">
                        <FaEnvelope />
                      </i>
                      <div className="topic">Email</div>
                      <div className="text-one">contact@wexorai.com</div>
                      <div className="text-two">https://wexorai.com</div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="topic-text"> SENT US A MESSAGE </div>
                    <p>
                      Feel free to reach out with any questions or inquiries you
                      may have. I'm here to assist you and provide the help you
                      need.
                    </p>
                    <form action="#">
                      <div className="input-box">
                        <input type="text" placeholder="Enter your name" />
                      </div>
                      <div className="input-box">
                        <input type="text" placeholder="Enter your email" />
                      </div>
                      <div className="input-box message-box">
                        <input type="text" placeholder="Enter your message" />
                      </div>
                      <div>
                        {/* <div className="button mr-5 ">
                  <input type="button" value="Send Now" />
                </div> */}
                        <div>
                          <Link legacyBehavior href="/">
                            <a class="button2">🡨 BACK to home</a>
                          </Link>

                          <a href="something" class="button2">
                            sent
                          </a>
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
