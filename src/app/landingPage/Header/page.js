import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className=" py-8">
      <div className=" container mx-auto">
        <div className="flex justify-between items-center">
          {/* <a href="/landingPage"> */}

          <Image
            src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/wexorLogo.jpg"
            alt="Login Image"
            width={90}
            height={90}
            style={{ borderRadius: "25%" }}
          />
          {/* </a> */}
          {/* <Link href={"/login"}>
            <button className="btn btn-sm ">work with us</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
