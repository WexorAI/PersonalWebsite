"use client";

import React from "react";
import styles from "./Background.css";
function Background() {
  const videoRef = React.useRef();

  React.useEffect(() => {
    const video = videoRef.current;
    video.play();
    video.loop = true;
    video.muted = true;
  }, []);
  return (
    <div >
      <div className="overlay" style={{zIndex:1}}></div>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        area-hidden="true"
        playsInline
      >
        <source src="./bgvideo.webm" type="video/webm"></source>
      </video>
    </div>
  );
}

export default Background;
