"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
// import { fadeIn } from "@/app/components/Variants";
import { fadeIn } from "../../../app/components/Variants";
import styles from "./Services.css";

import Link from "next/link";

const services = [
  {
    name: "Web Development:",
    description:
      "Our web team excels in crafting visually captivating, functional websites, tailored to your unique business needs. Find your perfect online brand representation with us.",

    link: "lern more",
  },
  {
    name: "Software Development:",
    description:
      "Unleash your organization's potential with our expert software development. Specializing in scalable, efficient solutions tailored to your needs, we ensure seamless business operations.",
    link: "lern more",
  },
  {
    name: "App Development:",
    description:
      "Discover user-friendly, feature-rich apps on Android and iOS , boosting your mobile presence effectively in this smartphone era.",
    link: "lern more",
  },
  {
    name: "Chatbot & AI Automation:",
    description:
      "Elevate customer support and workflow efficiency with our AI solutions. We offer real-time assistance, reducing support team workload. Our AI automation boosts productivity.",
    link: "lern more",
  },
];
function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container mx-auto">
        <div className="side flex flex-col lg:flex-row ">
          {/* text&image*/}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" flex-1 lg:bg-services lg:bg-botton bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            style={{ margin: "auto" }}
          >
            <span className="h2 mb-6">What We Offer:</span>
            <h1>Our Servicess</h1>
            <hr />
            <p className=" max-w-[455px] mb-16  ">
              Welcome to WexorAI,the leading provider of cutting-edge technology
              solutions. Our expertise lies in delivering innovative services
              that empower your business to excel in the digital age. You can
              explore the wide range of solutions we offer to help your business
              thrive:
            </p>
            {/* <span className="border-b border-white/20 flex" /> */}

            {/* <a href="#">download app</a> */}
            {/* <Link href={"/login"}>
              <button className="btn btn-sm"> see our web</button>
            </Link>{" "} */}
          </motion.div>
          {/* services section */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1"
          >
            <div>
              {services.map((services, index) => {
                // destructurning serviceess
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex  "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6  ">
                        {name}
                      </h4>
                      <p
                        className=" font-secondary leading-tight"
                        style={{ fontFamily: "Roboto" }}
                      >
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
