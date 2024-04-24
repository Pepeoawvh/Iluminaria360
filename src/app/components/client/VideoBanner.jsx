'use client'
import React, { useRef } from "react";

const VideoBanner = ({ src }) => {
  const bannerVideo = useRef(null);

  return (
    <div className="h-full w-full ">
      <video
        ref={bannerVideo}
        className="object-fill opacity-790"
        src="/img/bannerVideo.mp4"
        autoPlay={true}
        loop
        muted
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default VideoBanner;