import styles from "../app/landingPage/landingPage.css";
import Chatbot from "./ChatBot/page";
import BackgroundVideo from "./components/BackgroundVideo";
import About from "./landingPage/About/page";
import Banner from "./landingPage/Banner/page";
import Footer from "./landingPage/Footer/page";
import Header from "./landingPage/Header/page";
import Services from "./landingPage/Services/page";
import Work from "./landingPage/Work/page";
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
  // useEffect(() => {
  //   const threeScript = document.createElement("script");
  //   threeScript.setAttribute("id", "threeScript");
  //   threeScript.setAttribute(
  //     "src",
  //     "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
  //   );
  //   document.getElementsByTagName("head")[0].appendChild(threeScript);
  //   return () => {
  //     if (threeScript) {
  //       threeScript.remove();
  //     }
  //   };
  // }, []);
  return (
    <div
      style={{ backgroundColor: "#090447" }}
      className="bg-site bg-no-repeat
        bg-cover overflow-hidden"
    >
      <BackgroundVideo
        // aria-hidden="true"
        // playsinline
        // peload="none"
        // muted
        // loop
      />
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
