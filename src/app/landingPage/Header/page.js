import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className=" py-8">
      <div className=" container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/landingPage">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5659/5659696.png"
              className="w-25"
              alt="NOIMAGE"
            />
          </a>
          {/* <Link href={"/login"}>
            <button className="btn btn-sm ">work with us</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
