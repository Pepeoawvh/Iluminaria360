import React from "react";

const GuiaCasa = () => {
  return (
    <div className="h-full">
      <div
        id="homeTour"
        className="grid justify-items-center z-20 h-full rounded-xl shadow-md bg-white mb-5 sm:mt-5 mt-10 sm:mx-12 "
      >
        <iframe
          id="tour-embeded"
          name="Av. El Retiro"
          src="https://tour.panoee.net/iframe/granadaavretiro"
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allowvr="no"
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

export default GuiaCasa;
