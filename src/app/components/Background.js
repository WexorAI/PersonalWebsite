"use client"
import React, { useEffect } from "react";

import styles from "./Background.css";
function Background() {
  const videoRef = React.useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this value based on when you want the video to start loading
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.src = "./bgvideo.webm"; // Load the video source when it's in the viewport
          video.play(); // Start playing when it's loaded
          observer.disconnect(); // Disconnect the observer to avoid further checks
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(video);

    return () => {
      // Cleanup function: disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="overlay" style={{ zIndex: 1 }}></div>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}

export default Background;