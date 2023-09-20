"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../app/components/Variants";
import Image from "next/image";
import Link from "next/link";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section " id="about" ref={ref} style={{top:"0"}}>
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0  ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden lg:flex   flex-1  bg-contain bg-no-repeat h-[640px] max-w-[320px] lg:max-w-[482px] mix-blend-lighten bg-top "
          >
            <Image
              src="./chatingwomen.png"
              alt="Login Image"
              width={800}
              height={750}
            />
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1  mb-12  "
          >
            <h2 className=" h2 text-accent ">About </h2>
            <h3 className="h3 mb-4 ">Welcome to WexorAI!</h3>
            <p className=" mb-6  ">
              Your Technological Transformation Partner!... At WexorAI, our
              passion lies in revolutionizing businesses through advanced
              technology. We specialize in creating chatbots and implementing AI
              automation to optimize operations and elevate customer
              experiences. Our team of experts is well-versed in web
              development, software solutions, and app development, catering to
              all your digital requirements. Supercharge your business with our
              AI-powered chatbots, ensuring round-the-clock support and
              significantly enhancing customer satisfaction. Embrace automation
              to skyrocket efficiency, reduce errors, and lead the way in
              digital transformation with WexorAI."
            </p>
            {/* stats */}
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2  ">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  X7
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                virtual   <br />
                SERVICES
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2  ">
                  {inView ? <CountUp start={0} end={24} duration={3} /> : null}
                  x7
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  chatbot
                  <br />
                  SUPPORT
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2  ">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  SATISFIED <br />
                  CLIENT
                </div>
              </div>
            </div> */}
            <div className="flex gap-x-8 items-center ">
              {/* <button className="btn btn-lg">Contact Us</button> */}
              <Link href="/comingSoon">
                <div className="text-gradient btn-link">OUR PORTFOLIO</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
