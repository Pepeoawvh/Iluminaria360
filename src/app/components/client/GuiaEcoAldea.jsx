import React from "react";

const GuiaEcoAldeaTour = () => {
  return (
    <div className="h-full">
      <div
        id="homeTour"
        className="grid justify-items-center z-20 h-full md:h-screen rounded-xl shadow-md bg-white mb-5 sm:pt-5 mt-10  md:px-12 md:mt-0 md:mb-0 "
      >
        <iframe
          id="tour-embeded"
          name="Panal del Mar EcoAldea"
          src="https://tour.panoee.net/iframe/panal-del-mar-ecoaldea"
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allowvr="yes"
          allow="vr; xr; accelerometer; gyroscope; autoplay;"
          allowFullScreen="false"
          webkitallowfullscreen="false"
          mozallowfullscreen="false"
          loading="eager"
        ></iframe>
      </div>
    </div>
  );
};

export default GuiaEcoAldeaTour;
