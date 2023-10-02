import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
  FaCheck,
  FaUsers,
  FaHome,
  FaQuoteLeft,
} from "react-icons/fa";
import Chatbot from "./ChatBot/page";
// import Chatbot from "./ChatBot/page";

export const metadata = {
  title: "Home page",
  description:
    "At WexorAI, we are dedicated to creating inventive solutions that harness the power of the latest technologies to transform your concepts into reality. Our team of skilled professionals excels in a variety of services tailored to fulfill your digital requirements.",
  alternates: {
    canonical: `/`,
  },
};

export default function Home() {
  return (
    <>
      <div>
        <>
          {/* Spinner Start */}
          {/* <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-grow text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            ></div>
          </div> */}
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
                    <Link href="/" className="nav-item nav-link active">
                      Home
                    </Link>
                    <Link href="About" className="nav-item nav-link">
                      About
                    </Link>
                    <Link href="Service" className="nav-item nav-link">
                      Services
                    </Link>
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
          <div className="container-fluid pt-5 bg-primary hero-header mb-5">
            <div className="container pt-5">
              <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                  <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
                    Wexor.AI
                  </div>
                  <h1 className="display-4 text-white mb-4 animated slideInRight">
                    Welcome to the future of AI-powered business automation{" "}
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Welcome to Wexor.AI, where AI meets business automation.
                    Explore the future of streamlined operations, enhanced
                    efficiency, and unprecedented growth with us
                  </p>
                  <Link
                    href="About"
                    className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
                  >
                    Read More
                  </Link>
                  <Link
                    href="Contact"
                    className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-end">
                  <img className="img-fluid" src="img/hero-img.png" alt="" />
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
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="about-img">
                    <img className="img-fluid" src="img/about-img.jpg" />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                    <Link href="About">About Us</Link>
                  </div>
                  <h1 className="mb-4">
                    We Make Your Business Smarter with Artificial Intelligence
                  </h1>
                  <p className="mb-4">
                    Your Technological Transformation Partner!... At WexorAI,
                    our passion lies in revolutionizing businesses through
                    advanced technology. We specialize in creating chatbots and
                    implementing AI automation to optimize operations and
                    elevate customer experiences. Our team of experts is
                    well-versed in web development, software solutions, and app
                    development, catering to all your digital requirements.
                  </p>
                  <p className="mb-4">
                    Supercharge your business with our AI-powered chatbots,
                    ensuring round-the-clock support and significantly enhancing
                    customer satisfaction. Embrace automation to skyrocket
                    efficiency, reduce errors, and lead the way in digital
                    transformation with WexorAI.{" "}
                  </p>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <FaCheck color="#1363c6" />
                        Award Winning
                      </h6>
                      <h6 className="mb-0">
                        <FaCheck color="#1363c6" />
                        Professional Staff
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <FaCheck color="#1363c6" />
                        24/7 AI Support
                      </h6>
                      <h6 className="mb-0">
                        <FaCheck color="#1363c6" />
                        Fair Prices
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Link
                      className="btn btn-primary rounded-pill px-4 me-3"
                      href="About"
                    >
                      Read More
                    </Link>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href=""
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href="https://www.instagram.com/wexorai/"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square"
                      href="https://www.linkedin.com/company/wexorai/"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
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
                    technology and unwavering commitment. Our journey is marked
                    by dedication, innovation, and excellence.{" "}
                  </p>
                  <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                      <FaCheck color="#1363c6" />
                    </div>
                    <span>
                      Together, we'll create a website that reflects your brand.
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
                        <FaUsers size={60} className="  text-white" />
                        <div className="ms-3">
                          <h2
                            className="text-white mb-0"
                            data-toggle="counter-up"
                          >
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
                        <FaHome size={60} className=" text-white" />
                        <div className="ms-3">
                          <h2
                            className="text-white mb-0"
                            data-toggle="counter-up"
                          >
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
          {/* Case Start */}
          <div className="container-fluid bg-light py-5">
            <div className="container py-5">
              <div
                className="mx-auto text-center wow fadeIn"
                data-wow-delay="0.1s"
                style={{ maxWidth: 500 }}
              >
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                  Case Study
                </div>
                <h1 className="mb-4">Explore Our Chatbot Expertise</h1>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="case-item position-relative overflow-hidden rounded mb-2">
                    <img className="img-fluid" src="img/project-1.jpg" alt="" />
                    <a className="case-overlay text-decoration-none" href="">
                      <small>Advanced AI Integration</small>
                      <h5 className="lh-base text-white mb-3">
                      Discover the power of artificial intelligence behind our chatbot's responses                      </h5>
                      <span className="btn btn-square btn-primary">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="case-item position-relative overflow-hidden rounded mb-2">
                    <img className="img-fluid" src="img/project-2.jpg" alt="" />
                    <a className="case-overlay text-decoration-none" href="">
                      <small>Human-Like Interaction</small>
                      <h5 className="lh-base text-white mb-3">
                      Experience natural and engaging conversations.
                      </h5>
                      <span className="btn btn-square btn-primary">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                  <div className="case-item position-relative overflow-hidden rounded mb-2">
                    <img className="img-fluid" src="img/project-3.jpg" alt="" />
                    <a className="case-overlay text-decoration-none" href="">
                      <small>24/7 Availability:</small>
                      <h5 className="lh-base text-white mb-3">
                      Our chatbot is ready to assist you around the clock.
                      </h5>
                      <span className="btn btn-square btn-primary">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Case End */}
          {/* FAQs Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div
                className="mx-auto text-center wow fadeIn"
                data-wow-delay="0.1s"
                style={{ maxWidth: 500 }}
              >
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                  Popular FAQs
                </div>
                <h1 className="mb-4">Frequently Asked Questions</h1>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="accordion" id="accordionFAQ1">
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          What is AI-automation, and how can it benefit our
                          business?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          AI-powered business automation uses artificial
                          intelligence to streamline operations, increase
                          efficiency, and reduce manual tasks. It benefits your
                          business by improving productivity, reducing errors,
                          and enabling data-driven decision-making{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How can AI chatbots enhance my customer support?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          AI chatbots provide 24/7 customer support, answer
                          frequently asked questions, and handle routine
                          inquiries. They free up your support team to focus on
                          more complex issues, leading to higher customer
                          satisfaction.{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What industries can benefit from AI automation?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          AI automation can benefit a wide range of industries,
                          including healthcare, finance, e-commerce,
                          manufacturing, and customer service. It's adaptable
                          and scalable to meet various business needs.{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Are AI solutions expensive to implement?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          The cost of implementing AI solutions can vary
                          depending on your specific requirements. However, AI
                          automation often leads to long-term cost savings by
                          reducing labor expenses and increasing efficiency.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion" id="accordionFAQ2">
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How long does it take to see results from AI
                          implementation?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          The timeline for seeing results from AI implementation
                          depends on the complexity of the project and the scope
                          of automation. Generally, you can expect to see
                          initial improvements within a few months.{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Is my business data safe with AI solutions?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Data security is a top priority. Reputable AI
                          providers ensure that your data is protected through
                          encryption, access controls, and compliance with data
                          privacy regulations.{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.7s"
                    >
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          Can AI solutions be customized to fit my specific
                          business needs?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Yes, AI solutions can be tailored to your unique
                          business requirements. Providers like us offer
                          customized solutions to address your specific
                          challenges and goals.{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item wow fadeIn"
                      data-wow-delay="0.8s"
                    >
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          What kind of support and maintenance do you provide?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          We offer comprehensive support and maintenance
                          services to ensure your AI solutions run smoothly.
                          This includes regular updates, troubleshooting, and
                          technical assistance.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQs Start */}
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
                  At WexorAI, our team is the driving force behind our success. We've assembled a group of highly skilled and passionate individuals who are dedicated to delivering exceptional results for our clients. Get to know the faces behind the innovation:                  </p>
                  <a className="btn btn-primary rounded-pill px-4" href="">
                    Read More
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="row g-4">
                    <div className="col-md-6">

                      <div className="row g-4">
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.1s"
                        >
                          <div className="team-item bg-white text-center rounded p-4 pt-0">
                            <img
                              className="img-fluid rounded-circle p-4"
                              src="img/team-1.jpg"
                              alt=""
                            />
                            <h5 className="mb-0">Shihar</h5>
                            <small>Founder &amp; CEO</small>
                            <div className="d-flex justify-content-center mt-3">
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <div className="team-item bg-white text-center rounded p-4 pt-0">
                            <img
                              className="img-fluid rounded-circle p-4"
                              src="img/team-2.jpg"
                              alt=""
                            />
                            <h5 className="mb-0">Rashid</h5>
                            <small>Co-founder</small>
                            <div className="d-flex justify-content-center mt-3">
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
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
                          <div className="team-item bg-white text-center rounded p-4 pt-0">
                            <img
                              className="img-fluid rounded-circle p-4"
                              src="img/team-3.jpg"
                              alt=""
                            />
                            <h5 className="mb-0">Kate Winslet</h5>
                            <small>Co Founder</small>
                            <div className="d-flex justify-content-center mt-3">
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.7s"
                        >
                          <div className="team-item bg-white text-center rounded p-4 pt-0">
                            <img
                              className="img-fluid rounded-circle p-4"
                              src="img/team-4.jpg"
                              alt=""
                            />
                            <h5 className="mb-0">Cody Gardner</h5>
                            <small>Project Manager</small>
                            <div className="d-flex justify-content-center mt-3">
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-square btn-primary m-1"
                                href=""
                              >
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
                          src=""
                          alt="notfound"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Musthafa Kalodi</h5>
                          <span></span>
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
                          src=""
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
                          src=""
                          alt="notfound"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Muhammed Basith</h5>
                          <span>KPK Traders</span>
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
                  <div className="position-relative w-100 mt-3 mb-2">
                    <input
                      className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                      type="text"
                      placeholder="Enter Your Email"
                      style={{ height: 48 }}
                    />
                    <button
                      type="button"
                      className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                    >
                      <i className="fa fa-paper-plane text-primary fs-4" />
                    </button>
                  </div>
                  <small className="text-white-50">
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
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
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <a href="index.html" className="d-inline-block mb-3">
                    <h1 className="text-white">WexorAI</h1>
                  </a>
                  <p className="mb-0">
                    Ready to take your business to the next level? Contact us
                    today. We're passionate about crafting innovative solutions
                    that leverage cutting-edge technologies to bring your ideas
                    to life{" "}
                  </p>
                </div>
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <h5 className="text-white mb-4">Get In Touch</h5>
                  <p>
                    <i className="fa fa-map-marker-alt me-3" />
                    kozhikkode,Kerala,India
                  </p>
                  <p>
                    <i className="fa fa-phone-alt me-3" />
                    +91-8899908450
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3" />
                    contact@wexorai.com
                  </p>
                  <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="">
                      <FaTwitter size={32} color="#1DA1F2" />{" "}
                    </a>
                    <a
                      className="btn btn-outline-light btn-social"
                      href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO"
                    >
                      <FaFacebook size={32} color="#1877F2" />{" "}
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <FaYoutube size={32} color="#FF0000" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-social"
                      href="https://www.instagram.com/wexorai/"
                    >
                      <FaInstagram size={32} color="#C13584" />{" "}
                    </a>
                    <a
                      className="btn btn-outline-light btn-social"
                      href="https://www.linkedin.com/company/wexorai/"
                    >
                      <FaLinkedin size={32} color="#0077B5" />{" "}
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.5s"
                >
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
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.7s"
                >
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
      </div>
    </>
  );
}
