"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/Variants";
import Link from "next/link";

const services = [
  {
    name: "Web Development:",
    description:
      "Our team creates visually stunning and highly functional websites that are tailored to suit your business requirements.",
    link: "lern more",
  },
  {
    name: "Software Development:",
    description:
      " Our skilled software developers are proficient in creating scalable and efficient solutions that cater to your specific organizational needs",
    link: "lern more",
  },
  {
    name: "App Development:",
    description:
      "In the era of smartphones, Our app development services encompass both iOS and Android platforms, delivering user-friendly and feature-rich apps.",
    link: "lern more",
  },
  {
    name: "Chatbot & AI Automation:",
    description:
      "Our AI-powered chatbots provide real-time assistance and reduce support team workload, while AI automation streamlines workflows for increased productivity.",
    link: "lern more",
  },
];
function Services() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text&image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-botton bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What We Offer:</h2>
            <h3 className="h3 max-w-[455px] mb-16  ">
              We are passionate about crafting innovative solutions that
              leverage cutting-edge technologies to bring your ideas to life.
              Our team of experts specializes in a range of services to meet
              your digital needs.
            </h3>
            {/* <Link href={"/login"}>
              <button className="btn btn-sm"> see our web</button>
            </Link>{" "} */}
          </motion.div>
          {/* services section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((services, index) => {
                // destructurning serviceess
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex  "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6  ">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight  ">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
