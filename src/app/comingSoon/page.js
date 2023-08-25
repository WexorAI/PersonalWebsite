import React from "react";
import styles from "./comingSoon.css";
import Image from "next/image";

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
                 <a href="/" class="button2">
                  🡨 BACK to home
                  </a>
                  <a href="/contactus" class="button2">
                    CONTACT US
                  </a>{" "}
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
