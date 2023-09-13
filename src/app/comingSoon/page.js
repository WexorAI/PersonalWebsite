import React from "react";
import styles from "./comingSoon.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "comingSoon page",
  description:"Perfect and awesome to present your future product or service.Hooking audience attention is all in the opener.",
  alternates:{
    canonical:`/comingSoon`
  }
};
function comingSoon() {
  return (
    <div className="soon">
      <div class="containerr">
        <div class="wrapperr">
          <div class="contentt">
            <h1>We're Coming Soon</h1>
            <p>
              Perfect and awesome to present your future product or service.{" "}
              <br />
              Hooking audience attention is all in the opener.
            </p>
            {/* <a href="/contactus" class="btn1 btn">
              Contactus
            </a>
            <a href="/" class="btn2 btn">
              Back to Home
            </a> */}

            <Link legacyBehavior href="/">
              <a class="button2">🡨 BACK to home</a>
            </Link>

            <Link legacyBehavior href="/contactus">
              <a class="button2">CONTACT US</a>
            </Link>
            <Image
              src="rocket.png"
              alt="Login Image"
              width={150}
              height={250}
              className="rocket"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default comingSoon;
