"use client";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import bg from "../../../../public/send.png";
import styles from "./Footer.css";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { smoothScroll } from "../../components/scroll";
function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the email input value
    const email = e.target.email.value;

    // Simple email validation (you can use a more comprehensive regex)
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    router.push("/contactus");
  };
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row ">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>
                      <a
                        style={{ color: "gray" }}
                        href="https://www.google.com/maps/place/Cyberpark+Kozhikode/@11.2863612,75.7940973,13z/data=!4m10!1m2!2m1!1skozhikode+it+park!3m6!1s0x3ba65b946032ba75:0xf5ed91156d32a4f2!8m2!3d11.2541826!4d75.8370307!15sChFrb3poaWtvZGUgaXQgcGFya5IBD3RlY2hub2xvZ3lfcGFya-ABAA!16s%2Fg%2F1v6p78_h?entry=ttu"
                      >
                        kerala, Cyberpark Kozhikode
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>
                      <a style={{ color: "gray" }} href="tel:+918899908450">
                        +91-8899908450
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>
                      <a
                        style={{ color: "gray" }}
                        href="mailto:contact@wexorai.com"
                      >
                        contact@wexorai.com
                      </a>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Image
                      src="./wexorwhiteimg.jpg"
                      alt="Login Image"
                      width={800}
                      height={750}
                      style={{ borderRadius: "10px" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="footer-text">
                    <p>
                      Ready to take your business to the next level? Contact us
                      today. We're passionate about crafting innovative
                      solutions that leverage cutting-edge technologies to bring
                      your ideas to life
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                      <a href="https://www.linkedin.com/company/wexorai/">
                        <FaLinkedin />
                      </a>
                      <a href="https://www.instagram.com/wexorai/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO">
                <FaFacebook />
              </a>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#home" onClick={() => smoothScroll("#home")}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" onClick={() => smoothScroll("#about")}>
                        about
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        onClick={() => smoothScroll("#services")}
                      >
                        services
                      </a>
                    </li>
                    <li>
                      <a href="#work" onClick={() => smoothScroll("#work")}>
                        work
                      </a>
                    </li>
                    <li>
                      <a href="/contactus">Contactus</a>
                    </li>
                    <li>
                      <a href="/comingSoon">visit our website</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-left">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#home" onClick={() => smoothScroll("#home")}>Home</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                    <li>
                      <a href="/">Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 text-center text-lg-right">
                <div className="copyright-text">
                  <a href="/">
                    <p>Copyright &copy; 2023, All Right Reserved WexorAI</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}

export default Footer;
