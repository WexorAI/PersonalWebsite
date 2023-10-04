import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRobot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Chatbot from "../ChatBot/page";
import NewsletterSubscription from "../components/NewsletterSubscription";

function Service() {
  return (
    <>
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
                <Link href="About" className="nav-item nav-link">
                  About
                </Link>
                <Link href="Service" className="nav-item nav-link active">
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
                Our Services
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
                    Our Services
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
      {/* Service Start */}
      <div className="container-fluid bg-light mt-5 py-5">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                    Our Services
                  </div>
                  <h1 className="mb-4">
                    Our Excellent AI Solutions for Your Business
                  </h1>
                  <p className="mb-4">
                    Welcome to WexorAI,the leading provider of cutting-edge
                    technology solutions. Our expertise lies in delivering
                    innovative services that empower your business to excel in
                    the digital age. You can explore the wide range of solutions
                    we offer to help your business thrive:
                  </p>
                  <Link
                    className="btn btn-primary rounded-pill px-4"
                    href="Service"
                  >
                    Read More
                  </Link>
                </div>
                <div className="col-lg-7">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="row g-4">
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.1s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <FaCode size={40} color="#1363c6" />{" "}
                            </div>
                            <h5 className="mb-3">Web Development:</h5>
                            <p>
                              Our web team excels in crafting visually
                              captivating, functional websites, tailored to your
                              unique business needs. Find your perfect online
                              brand representation with us.
                            </p>
                            {/* <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a> */}
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <FaLaptopCode size={40} color="#1363c6" />{" "}
                            </div>
                            <h5 className="mb-3">Software Development:</h5>
                            <p>
                              Unleash your organization's potential with our
                              expert software development. Specializing in
                              scalable, efficient solutions tailored to your
                              needs, we ensure seamless business operations.
                            </p>
                            {/* <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 pt-md-4">
                      <div className="row g-4">
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.3s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <FaRobot size={40} color="#1363c6" />{" "}
                            </div>
                            <h5 className="mb-3">
                              Chatbot &amp; AI Automation:
                            </h5>
                            <p>
                              Elevate customer support and workflow efficiency
                              with our AI solutions. We offer real-time
                              assistance, reducing support team workload.
                            </p>
                            {/* <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a> */}
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.7s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <FaMobileAlt size={40} color="#1363c6" />{" "}
                            </div>
                            <h5 className="mb-3">App Development:</h5>
                            <p>
                              Elevate your digital presence with our
                              cutting-edge Android and iOS apps. Seamlessly
                              connect with your audience in the smartphone age,
                              delivering user-friendly and feature-rich
                              experiences.
                            </p>
                            {/* <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* Service End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                  Unlocking Business Excellence with WexorAI
                  </div>
                  <h1 className="mb-4">What Say Our Clients!</h1>
                  <p className="mb-4">
                  At WexorAI, our mission is to drive technological transformation for businesses, and we take pride in the experiences our clients have shared. Here's what our clients have to say about how we've helped them harness the power of artificial intelligence and advanced technology to enhance their operations, elevate customer experiences, and achieve outstanding results
                  </p>
                  <a className="btn btn-primary rounded-pill px-4" href="">
                    Read More
                  </a>
                </div>
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                  <div className="owl-carousel testimonial-carousel border-start border-primary">
                    <div className="testimonial-item ps-5">
                      <FaQuoteLeft size={32} className="text-primary mb-3" />{" "}
                      <p className="fs-4">
                      WexorAI's chatbot transformed our customer support. It's available 24/7, providing instant responses and reducing our support team's workload. Our customers are happier, and we've seen a significant boost in customer satisfaction.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDehpIQsG7oX3T0R0pduO_rFDEKwtz0pkCw&usqp=CAU"
                          alt="notfound"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Musthafa Kalodi</h5>
                          <span> AL OSOOL AUDITING & FINANCIAL CONSULTATIONS</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item ps-5">
                      <FaQuoteLeft size={32} className="text-primary mb-3" />
                      <p className="fs-4">
                      WexorAI's AI automation streamlined our workflow. It's like having a virtual assistant that handles repetitive tasks, allowing our team to focus on more strategic initiatives. Our efficiency has skyrocketed since partnering with them.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDehpIQsG7oX3T0R0pduO_rFDEKwtz0pkCw&usqp=CAU"
                          alt="notfound"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Salmanul faris</h5>
                          <span>MOTO heads</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item ps-5">
                      <FaQuoteLeft size={32} className="text-primary mb-3" />
                      <p className="fs-4">
                      The chatbot developed by WexorAI engages in natural, human-like conversations. It's not just a tool; it's a genuine part of our team. Customers love the personalized interactions, and it has improved our brand perception.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDehpIQsG7oX3T0R0pduO_rFDEKwtz0pkCw&usqp=CAU"
                          alt="notfound"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Muhammed Basith</h5>
                          <span>KPK Traders pvt.ltd</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* Testimonial End */}
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

export default Service;
