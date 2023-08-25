import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import bg from "../../../../public/send.png";
import styles from "./Footer.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span> kerala, infopark, kochin</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+91-9876543210 </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
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
                      src="wexorwhiteimg.jpg"
                      alt="Login Image"
                      width={800}
                      height={750}
                      style={{ borderRadius: '10px' }}

                    />
                  </div>
                  <div className="footer-text">
                    <p>
                      We are passionate about crafting innovative solutions that
                      leverage cutting-edge technologies to bring your ideas to
                      life. Our team of experts specializes in a range of
                      services to meet your digital needs.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                      <a href="https://www.linkedin.com/company/wexorai/">
                        <FaLinkedin />
                      </a>
                      <a href="/instagram">
                        <FaInstagram />
                      </a>
                      <a href="/facebook">
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">about</a>
                    </li>
                    <li>
                      <a href="/services">services</a>
                    </li>
                    <li>
                      <a href="">portfolio</a>
                    </li>
                    <li>
                      <a href="/login">Contact</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
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
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>send</button>
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
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <a href="/">
                    <p>Copyright &copy; 2023, All Right Reserved WexorAI</p>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Terms</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                    <li>
                      <a href="/">Policy</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
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
