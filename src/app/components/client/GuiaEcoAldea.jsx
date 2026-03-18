import React from "react";

const GuiaEcoAldeaTour = () => {
  return (
    <div className="h-full">
      <div className="grid justify-items-center z-20 h-full md:h-screen rounded-xl shadow-md bg-white mb-5 sm:pt-5 mt-10 md:px-12 md:mt-0 md:mb-0">
        <iframe
          id="tour-embeded"
          title="Tour Virtual: EcoAldea Panal del Mar"
          src="https://tour.panoee.net/iframe/panal-del-mar-ecoaldea"
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allow="vr; xr; accelerometer; gyroscope; autoplay; fullscreen"
          allowFullScreen
          loading="eager"
        />
      </div>
    </div>
  );
};

export default GuiaEcoAldeaTour;
