import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import {
  FaCheck,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Chatbot from "../ChatBot/page";
import NewsletterSubscription from "../components/NewsletterSubscription";

function About() {
  return (
    <>
      {/* Spinner Start */}
      {/* Spinner End */}
      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link href="/" className="navbar-brand">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Image
                    src="./WexorBlackDots.png"
                    alt="Login Image"
                    width={50}
                    height={40}
                    loading="lazy"
                    style={{
                      borderRadius: "25%",
                      zIndex: 1,
                      marginBottom: "8px ",
                    }}
                  />
                </div>
                <h1
                  style={{
                    marginLeft: "10px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  WexorAI
                </h1>
              </div>{" "}
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link href="/" className="nav-item nav-link ">
                  Home
                </Link>
                <Link href="About" className="nav-item nav-link active">
                  About
                </Link>
                <Link href="Service" className="nav-item nav-link">
                  Services
                </Link>
                {/* <Link href="Team" className="nav-item nav-link">
                      Our Team
                    </Link> */}
                <Link href="Contact" className="nav-item nav-link">
                  Contact
                </Link>{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Hero Start */}
      <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img
                className="img-fluid"
                src="img/hero-img.png"
                alt=""
                style={{ maxHeight: 300 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(20, 24, 62, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn btn-square bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: 600 }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-light px-4">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="img/about-img.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                About Us
              </div>
              <h1 className="mb-4">
                We Make Your Business Smarter with Artificial Intelligence
              </h1>
              <p className="mb-4">
                Your Technological Transformation Partner!... At WexorAI, our
                passion lies in revolutionizing businesses through advanced
                technology. We specialize in creating chatbots and implementing
                AI automation to optimize operations and elevate customer
                experiences. Our team of experts is well-versed in web
                development, software solutions, and app development, catering
                to all your digital requirements
              </p>
              <p className="mb-4">
                Supercharge your business with our AI-powered chatbots, ensuring
                round-the-clock support and significantly enhancing customer
                satisfaction. Embrace automation to skyrocket efficiency, reduce
                errors, and lead the way in digital transformation with WexorAI.
              </p>
              <div className="row g-3">
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <FaCheck color="#1363c6"  />
                        <span className="ms-2">Award Winning</span>
                      </h6>
                      <h6 className="mb-0">
                        <FaCheck color="#1363c6" />
                        <span className="ms-2">Professional Staff</span>
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <FaCheck color="#1363c6" />
                        <span className="ms-2"> 24/7 AI Support</span>
                      </h6>
                      <h6 className="mb-0">
                        <FaCheck color="#1363c6" />
                        <span className="ms-2">Fair Prices</span>
                      </h6>
                    </div>
                  </div>
              <div className="d-flex align-items-center mt-4">
                <Link
                  className="btn btn-primary rounded-pill px-4 me-3"
                  href="Service"
                >
                  Read More
                </Link>
                <a className="btn btn-outline-primary btn-square me-3" href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO">
                  <FaFacebook />
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href="">
                  <FaTwitter />
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href="https://www.instagram.com/wexorai/">
                  <FaInstagram />
                </a>
                <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/company/wexorai/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Feature Start */}
      <div className="container-fluid bg-primary feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                Your Trusted AI Partner with a Decade of Excellence{" "}
              </h1>
              <p className="text-light mb-4">
                For over a decade, we've been at the forefront of the AI
                industry, revolutionizing businesses with cutting-edge
                technology and unwavering commitment. Our journey is marked by
                dedication, innovation, and excellence.{" "}
              </p>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FaCheck color="#1363c6" />
                </div>
                <span>
                Crafting Your Brand Identity
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FaCheck color="#1363c6" />
                </div>
                <span>Delivering tangible results and ROI</span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FaCheck color="#1363c6" />
                </div>
                <span>Continuously innovate to keep you ahead.</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <i className="fa fa-home fa-3x text-white" />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        89
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <i className="fa fa-home fa-3x text-white" />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        50
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="img/feature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Team Start */}
      {/* <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Team
              </div>
              <h1 className="mb-4">Meet Our Experienced Team Members</h1>
              <p className="mb-4">
                At WexorAI, our team is the driving force behind our success.
                We've assembled a group of highly skilled and passionate
                individuals who are dedicated to delivering exceptional results
                for our clients. Get to know the faces behind the innovation:{" "}
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="img/team-1.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Shihar</h5>
                        <small>Founder &amp; CEO</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-instagram" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="img/team-2.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Rashid</h5>
                        <small>Co-founder</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-instagram" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="img/team-3.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Kate Winslet</h5>
                        <small>Co Founder</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-instagram" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          src="img/team-4.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Cody Gardner</h5>
                        <small>Project Manager</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-instagram" />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}
      {/* Newsletter Start */}
      <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src="img/newsletter.png" alt="" />
            </div>
            <div
              className="col-md-7 py-5 newsletter-text wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Newsletter
              </div>
              <h1 className="text-white mb-4">
                Let's subscribe the newsletter
              </h1>
              <NewsletterSubscription/>
              <small className="text-white-50">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">WexorAI</h1>
              </a>
              <p className="mb-0">
                Ready to take your business to the next level? Contact us today.
                We're passionate about crafting innovative solutions that
                leverage cutting-edge technologies to bring your ideas to life{" "}
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
              <FaMapMarkerAlt className="me-3" />
                kozhikkode,Kerala,India
              </p>
              <p>
                <FaPhoneAlt className="me-3" />
                +91-8899908450
              </p>
              <p>
                <FaEnvelope className="me-3" />
                contact@wexorai.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <FaTwitter size={32} color="#1DA1F2" />{" "}
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO">
                  <FaFacebook size={32} color="#1877F2" />{" "}
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaYoutube size={32} color="#FF0000" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/wexorai/">
                  <FaInstagram size={32} color="#C13584" />{" "}
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/wexorai/">
                  <FaLinkedin size={32} color="#0077B5" />{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <Link className="btn btn-link" href="">
                Home
              </Link>
              <Link className="btn btn-link" href="About">
                About Us
              </Link>
              <Link className="btn btn-link" href="Contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" href="Service">
                Our Services
              </Link>
              {/* <Link className="btn btn-link" href="">
                    Privacy Policy
                  </Link>
                  <Link className="btn btn-link" href="">
                    Terms &amp; Condition
                  </Link>
                  <Link className="btn btn-link" href="">
                    Career
                  </Link> */}
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <Link className="btn btn-link" href="Service">
                Web-Devolepment
              </Link>
              <Link className="btn btn-link" href="Service">
                Software-development
              </Link>
              <Link className="btn btn-link" href="Service">
                AI-Automation
              </Link>
              <Link className="btn btn-link" href="Service">
                Chatbot
              </Link>
              <Link className="btn btn-link" href="Service">
                Mobile-App development
              </Link>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <div className="copyright-text">
                  <a href="/">
                    <p>Copyright &copy; 2023, All Right Reserved WexorAI</p>
                  </a>
                </div>{" "}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="/">Home</Link>
                  <Link href="Service">Service</Link>
                  <Link href="About">About</Link>
                  <Link href="FAQs">FAQs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <div
          // href=""
          // className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
          >
            <Chatbot />
          </div>

    </>
  );
}

export default About;
