"use client";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
// import ReactTooltip from "react-tooltip";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../app/components/Variants";
import Link from "next/link";
import Image from "next/image";
function Banner() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto" style={{ zIndex: 2}} >
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left z-0" >
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className=" text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Wexor
              <span>AI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white mr-4">Our Services</span>
              <TypeAnimation
                sequence={[
                  "Web development",
                  2000,
                  "Software development",
                  2000,
                  "App development",
                  2000,
                  "Chatbot",
                  2000,
                  "Ai automation ",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-4 mx-w-lg mx-auto lg:max-0"
            >
              At WexorAI, we are dedicated to creating inventive solutions that
              harness the power of the latest technologies to transform your
              concepts into reality. Our team of skilled professionals excels in
              a variety of services tailored to fulfill your digital
              requirements.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0"
            >
              <Link href="/contactus">
                <button className="btn btn-lg">contact Us</button>
                {/* contact Us */}
              </Link>
              <Link href="/comingSoon">
                <div className="text-gradient btn-link">Try It</div>
              </Link>
            </motion.div>
            {/* social media icons */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
              
            >
              <a href="https://www.linkedin.com/company/wexorai/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/wexorai/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/people/Wexorai/61550830745032/?mibextid=9R9pXO">
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
            style={{ borderRadius: "600px", overflow: "hidden" }}
          >
            <Image
              src="./BANNERIMAGE.png"
              alt="Login Image"
              width={800}
              height={750}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
