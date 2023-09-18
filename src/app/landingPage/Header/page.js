import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.css";

function Header() {
  return (
    <div className=" py-8">
      <div className=" container mx-aut">
        <div className="flex justify-between items-center">
          {/* <a href="/landingPage"> */}

          <Image
            src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/wexorLogo.jpg"
            alt="Login Image"
            width={90}
            height={90}
            style={{ borderRadius: "25%" }}
          />
          {/* <div id="contain">
            <Link href={"/login"}>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-tex ">Login</span>
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
