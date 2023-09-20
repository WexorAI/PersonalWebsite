import styles from "../app/landingPage/landingPage.css";
import Chatbot from "./ChatBot/page";
import Background from "./components/Background";
import About from "./landingPage/About/page";
import Banner from "./landingPage/Banner/page";
import Footer from "./landingPage/Footer/page";
import Header from "./landingPage/Header/page";
import Services from "./landingPage/Services/page";
import Work from "./landingPage/Work/page";
import React from "react";

// import bg from "../../public/leadspace.png";
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
    <div
      style={{ backgroundColor: "#0d1145" }}
      className="bg-site bg-no-repeat
        bg-cover overflow-hidden"
    >
      <Background  />
      <Header />
      <Banner />
      {/* <NavBar /> */}
      <About />
      <Services />
      <Work />
      <Chatbot />
      <Footer />
      <div className="h-[flex]"></div>
    </div>
  );
}
