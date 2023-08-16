import styles from '../app/landingPage/landingPage.css'
import Chatbot from "./ChatBot/page";
import About from "./landingPage/About/page";
import Banner from "./landingPage/Banner/page";
import Footer from "./landingPage/Footer/page";
import Header from "./landingPage/Header/page";
import Services from "./landingPage/Services/page";
import Work from "./landingPage/Work/page";
import bg from "../../public/leadspace.png";

export default function Home() {
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
        <Chatbot />
        <Footer />
        <div className="h-[flex]"></div>
      </div>
  );
}
