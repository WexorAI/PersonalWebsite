import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

function About() {
  return (
<>
  {/* Spinner Start */}
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
                    <Link href="/" className="nav-item nav-link ">
                      Home
                    </Link>
                    <Link href="About" className="nav-item nav-link active">
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
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
          <p className="mb-4">
            Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
            sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor.
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
            <a className="btn btn-primary rounded-pill px-4 me-3" href="">
              Read More
            </a>
            <a className="btn btn-outline-primary btn-square me-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-primary btn-square me-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-primary btn-square me-3" href="">
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
            Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
            sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
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
                <i className="fa fa-home fa-3x text-white" />
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">
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
                <i className="fa fa-home fa-3x text-white" />
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">
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
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
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
                    <h5 className="mb-0">Boris Johnson</h5>
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
                    <h5 className="mb-0">Adam Crew</h5>
                    <small>Executive Manager</small>
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
  </div>
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
          <h1 className="text-white mb-4">Let's subscribe the newsletter</h1>
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
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <a href="index.html" className="d-inline-block mb-3">
            <h1 className="text-white">
              AI<span className="text-primary">.</span>Tech
            </h1>
          </a>
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor
          </p>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
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
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
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
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
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
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2">
    <i className="bi bi-arrow-up" />
  </a>
</>
  )
}

export default About
