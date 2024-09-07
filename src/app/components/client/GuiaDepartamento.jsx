import React from "react";

const GuiaDepartamento = () => {
  return (
    <div className="h-full animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards">
      <div
        id="homeTour"
        className="grid justify-items-center z-20 h-full md:h-screen rounded-xl shadow-md bg-white mb-5 sm:pt-5 mt-10  md:px-12 md:mt-0 md:mb-0"
      >
        <iframe
          id="panoee-tour-embeded"
          name="Depto Bilbao, Quilpué"
          src="https://tour.panoee.com/iframe/depto-bilbao-quilpue"
          frameBorder="20"
          width="100%"
          height="100%"
          scrolling="yes"
          allowvr="yes"
          allow="vr; xr; accelerometer; gyroscope; autoplay;"
          allowFullScreen="false"
          webkitallowfullscreen="false"
          mozallowfullscreen="false"
          loading="eager"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default GuiaDepartamento;
