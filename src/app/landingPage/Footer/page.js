import React from "react";
import styles from "./Footer.css";
import { FaDribbble, FaGithub, FaYoutube } from "react-icons/fa";
import bg from "../../../../public/send.png";

function Footer() {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span> kerala, infopark, kochin</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>+91-9876543210 </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="/">
                      <h2 className="h2 text">WexorAI</h2>
                      <h3 className="h3">The AI Automation </h3>
                      <h4>Company</h4>
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      We are passionate about crafting innovative solutions that
                      leverage cutting-edge technologies to bring your ideas to
                      life. Our team of experts specializes in a range of
                      services to meet your digital needs.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                      <a href="/youtube">
                        <FaYoutube />
                      </a>
                      <a href="/github">
                        <FaGithub />
                      </a>
                      <a href="/dribble">
                        <FaDribbble />
                      </a>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
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
                    {/* <li>
                      <a href="">portfolio</a>
                    </li> */}
                    <li>
                      <a href="/login">Contact</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i>send</i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <a href="/">
                    <p>Copyright &copy; 2023, All Right Reserved WexorAI</p>
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
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
