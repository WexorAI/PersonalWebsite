import React from 'react';
import VideoFile from '../../../public/bgvideo.webm';
import styles from './BackgroundVideo.css'; // You can create a CSS module for styling

function BackgroundVideo() {
  return (
    <div className='background'>
      <video autoPlay loop muted className="video">
        <source src={VideoFile} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;