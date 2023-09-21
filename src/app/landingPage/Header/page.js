import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.css";

function Header() {
  return (
    <div className="min-h-[15vh] lg:min-h-[22vh] py-4">
      <div className=" container mx-aut">
        <div className="flex justify-between items-center">
          {/* <a href="/landingPage"> */}

          <Image
            src="./wexorLogo.jpg"
            alt="Login Image"
            width={90}
            height={90}
            loading="lazy"
            style={{ borderRadius: "25%", zIndex:1 }}
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
