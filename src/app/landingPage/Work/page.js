"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../app/components/Variants";

import Image from "next/image";
import Link from "next/link";

function Work() {
  return (
    <section className="section flex items-center " id="work">
      <div className="container max-auto">
        <div className=" flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                {" "}
                Our Latest <br />
                work
              </h2>
              <p className=" max-w-sm mb-16">
                Empower your business with our AI-powered chatbots for 24/7
                support and customer satisfaction. Explore our portfolio to see
                how we've transformed ideas into digital reality
              </p>
              <Link href="/comingSoon">
                <button className=" btn btn-sm">see Our website</button>
              </Link>
            </div>
            {/* image one */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <Image
                src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/work.jpg"
                alt="Login Image"
                width={800}
                height={750}
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient ">title one </span>
              </div>
              {/* title two */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white ">title two</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            {/* image two */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <Image
                src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/work.jpg"
                alt="Login Image"
                width={800}
                height={750}
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient ">title one </span>
              </div>
              {/* title two */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white ">title two</span>
              </div>
            </div>
            {/* image three */}
            {/* image */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <Image
                src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/work.jpg"
                alt="Login Image"
                width={800}
                height={750}
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient ">title one </span>
              </div>
              {/* title two */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white ">title two</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;
