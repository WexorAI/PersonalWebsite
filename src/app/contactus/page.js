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
