'use client'
import React, { useRef } from "react";

const VideoBanner = ({ src }) => {
  const bannerVideo = useRef(null);

  return (
    <div className="h-full w-full animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards rounded-xl overflow-hidden shadow-lg">
      <video
        ref={bannerVideo}
        className="object-cover w-full h-full"
        src={src || "/img/bannerVideo.mp4"}
        autoPlay={true}
        loop
        muted
        playsInline
        poster="/img/thumbBilbao.jpg"
      />
    </div>
  );
};

export default VideoBanner;