import React from "react";
import Header from "./Header/page";
import Banner from "./Banner/page";
import NavBar from "./NavBar/page";
import About from "./About/page";
import Services from "./Services/page";
import Work from "./Work/page";
import bg from '../../../public/leadspace.png'
import Footer from "./Footer/page";
import styles from './landingPage.css'
import Chatbot from "../ChatBot/page";

function landingPage() {
  return (
    <div
    style={{backgroundImage: `url(${bg.src})`,}}
      className="bg-site bg-no-repeat
        bg-cover overflow-hidden"
    >
      <Header />
      <Banner />
      {/* <NavBar /> */}
      <About />
      <Services />
      <Work />
      <Chatbot/>
      <Footer/>
      <div className="h-[flex]"></div>
    </div>
  );
}

export default landingPage;
