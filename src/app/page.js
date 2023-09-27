import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
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
                <a href="index.html" className="navbar-brand">
                  <h1 className="text-white">
                    AI<span className="text-dark">.</span>Tech
                  </h1>
                </a>
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
                    <Link href="Team" className="nav-item nav-link">
                      Our Team
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
                    AI.Tech
                  </div>
                  <h1 className="display-4 text-white mb-4 animated slideInRight">
                    Artificial Intelligence for Your Business
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Tempor rebum no at dolore lorem clita rebum rebum ipsum
                    rebum stet dolor sed justo kasd. Ut dolor sed magna dolor
                    sea diam. Sit diam sit
                  </p>
                  <a
                    href=""
                    className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
                  >
                    Read More
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                  >
                    Contact Us
                  </a>
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
                    About Us
                  </div>
                  <h1 className="mb-4">
                    We Make Your Business Smarter with Artificial Intelligence
                  </h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <p className="mb-4">
                    Aliqu diam amet diam et eos labore. Clita erat ipsum et
                    lorem et sit, sed stet no labore lorem sit. Sanctus clita
                    duo justo et tempor.
                  </p>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <i className="fa fa-check text-primary me-2" />
                        Award Winning
                      </h6>
                      <h6 className="mb-0">
                        <i className="fa fa-check text-primary me-2" />
                        Professional Staff
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <i className="fa fa-check text-primary me-2" />
                        24/7 Support
                      </h6>
                      <h6 className="mb-0">
                        <i className="fa fa-check text-primary me-2" />
                        Fair Prices
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <a
                      className="btn btn-primary rounded-pill px-4 me-3"
                      href=""
                    >
                      Read More
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-outline-primary btn-square" href="">
                      <i className="fab fa-linkedin-in" />
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
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
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
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <i className="fa fa-robot fa-2x" />
                            </div>
                            <h5 className="mb-3">Robotic Automation</h5>
                            <p>
                              Erat ipsum justo amet duo et elitr dolor, est duo
                              duo eos lorem sed diam stet diam sed stet lorem.
                            </p>
                            <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <i className="fa fa-power-off fa-2x" />
                            </div>
                            <h5 className="mb-3">Machine learning</h5>
                            <p>
                              Erat ipsum justo amet duo et elitr dolor, est duo
                              duo eos lorem sed diam stet diam sed stet lorem.
                            </p>
                            <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a>
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
                              <i className="fa fa-graduation-cap fa-2x" />
                            </div>
                            <h5 className="mb-3">Education &amp; Science</h5>
                            <p>
                              Erat ipsum justo amet duo et elitr dolor, est duo
                              duo eos lorem sed diam stet diam sed stet lorem.
                            </p>
                            <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-12 wow fadeIn"
                          data-wow-delay="0.7s"
                        >
                          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon btn-square">
                              <i className="fa fa-brain fa-2x" />
                            </div>
                            <h5 className="mb-3">Predictive Analysis</h5>
                            <p>
                              Erat ipsum justo amet duo et elitr dolor, est duo
                              duo eos lorem sed diam stet diam sed stet lorem.
                            </p>
                            <a className="btn px-3 mt-auto mx-auto" href="">
                              Read More
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
                    We're Best in AI Industry with 10 Years of Experience
                  </h1>
                  <p className="text-light mb-4">
                    Aliqu diam amet diam et eos labore. Clita erat ipsum et
                    lorem et sit, sed stet no labore lorem sit. Sanctus clita
                    duo justo et tempor
                  </p>
                  <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                      <i className="fa fa-check" />
                    </div>
                    <span>Diam dolor diam ipsum et tempor sit</span>
                  </div>
                  <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                      <i className="fa fa-check" />
                    </div>
                    <span>Diam dolor diam ipsum et tempor sit</span>
                  </div>
                  <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                      <i className="fa fa-check" />
                    </div>
                    <span>Diam dolor diam ipsum et tempor sit</span>
                  </div>
                  <div className="row g-4 pt-3">
                    <div className="col-sm-6">
                      <div
                        className="d-flex rounded p-3"
                        style={{ background: "rgba(256, 256, 256, 0.1)" }}
                      >
                        <i className="fa fa-users fa-3x text-white" />
                        <div className="ms-3">
                          <h2
                            className="text-white mb-0"
                            data-toggle="counter-up"
                          >
                            9999
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
                        <i className="fa fa-check fa-3x text-white" />
                        <div className="ms-3">
                          <h2
                            className="text-white mb-0"
                            data-toggle="counter-up"
                          >
                            9999
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
                <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="case-item position-relative overflow-hidden rounded mb-2">
                    <img className="img-fluid" src="img/project-1.jpg" alt="" />
                    <a className="case-overlay text-decoration-none" href="">
                      <small>Robotic Automation</small>
                      <h5 className="lh-base text-white mb-3">
                        Lorem elitr magna stet eirmod labore amet labore clita
                      </h5>
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
                      <small>Machine learning</small>
                      <h5 className="lh-base text-white mb-3">
                        Lorem elitr magna stet eirmod labore amet labore clita
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
                      <small>Predictive Analysis</small>
                      <h5 className="lh-base text-white mb-3">
                        Lorem elitr magna stet eirmod labore amet labore clita
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
                          How to build a website?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          How long will it take to get a new website?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          Do you only create HTML websites?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          Will my website be mobile-friendly?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionFAQ1"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          Will you maintain my site for me?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          I’m on a strict budget. Do you have any low cost
                          options?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          Will you maintain my site for me?
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
                          I’m on a strict budget. Do you have any low cost
                          options?
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionFAQ2"
                      >
                        <div className="accordion-body">
                          Dolor nonumy tempor elitr et rebum ipsum sit duo duo.
                          Diam sed sed magna et magna diam aliquyam amet dolore
                          ipsum erat duo. Sit rebum magna duo labore no diam.
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
          <div className="container-fluid bg-light py-5">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                    Our Team
                  </div>
                  <h1 className="mb-4">Meet Our Experienced Team Members</h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
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
                            <h5 className="mb-0">Boris Johnson</h5>
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
                            <h5 className="mb-0">Adam Crew</h5>
                            <small>Executive Manager</small>
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
          </div>
          {/* Team End */}
          {/* Testimonial Start */}
          <div className="container-xxl py-5">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                  <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                    Testimonial
                  </div>
                  <h1 className="mb-4">What Say Our Clients!</h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <a className="btn btn-primary rounded-pill px-4" href="">
                    Read More
                  </a>
                </div>
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                  <div className="owl-carousel testimonial-carousel border-start border-primary">
                    <div className="testimonial-item ps-5">
                      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                      <p className="fs-4">
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et
                        lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-1.jpg"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Client Name</h5>
                          <span>Profession</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item ps-5">
                      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                      <p className="fs-4">
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et
                        lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-2.jpg"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Client Name</h5>
                          <span>Profession</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item ps-5">
                      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                      <p className="fs-4">
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et
                        lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-3.jpg"
                          style={{ width: 60, height: 60 }}
                        />
                        <div className="ps-3">
                          <h5 className="mb-1">Client Name</h5>
                          <span>Profession</span>
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
                    Diam sed sed dolor stet amet eirmod
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
                    <h1 className="text-white">
                      AI<span className="text-primary">.</span>Tech
                    </h1>
                  </a>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo et tempor
                  </p>
                </div>
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <h5 className="text-white mb-4">Get In Touch</h5>
                  <p>
                    <i className="fa fa-map-marker-alt me-3" />
                    123 Street, New York, USA
                  </p>
                  <p>
                    <i className="fa fa-phone-alt me-3" />
                    +012 345 67890
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3" />
                    info@example.com
                  </p>
                  <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-youtube" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <h5 className="text-white mb-4">Popular Link</h5>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Privacy Policy
                  </a>
                  <a className="btn btn-link" href="">
                    Terms &amp; Condition
                  </a>
                  <a className="btn btn-link" href="">
                    Career
                  </a>
                </div>
                <div
                  className="col-md-6 col-lg-3 wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <h5 className="text-white mb-4">Our Services</h5>
                  <a className="btn btn-link" href="">
                    Robotic Automation
                  </a>
                  <a className="btn btn-link" href="">
                    Machine learning
                  </a>
                  <a className="btn btn-link" href="">
                    Predictive Analysis
                  </a>
                  <a className="btn btn-link" href="">
                    Data Science
                  </a>
                  <a className="btn btn-link" href="">
                    Robot Technology
                  </a>
                </div>
              </div>
            </div>
            <div className="container wow fadeIn" data-wow-delay="0.1s">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    ©{" "}
                    <a className="border-bottom" href="#">
                      Your Site Name
                    </a>
                    , All Right Reserved.
                    {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                    Designed By{" "}
                    <a className="border-bottom" href="https://htmlcodex.com">
                      HTML Codex
                    </a>{" "}
                    Distributed By{" "}
                    <a className="border-bottom" href="https://themewagon.com">
                      ThemeWagon
                    </a>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                      <a href="">Home</a>
                      <a href="">Cookies</a>
                      <a href="">Help</a>
                      <a href="">FAQs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
          {/* Back to Top */}
          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
          >
            <i className="bi bi-arrow-up" />
          </a>
        </>
      </div>
    </>
  );
}
