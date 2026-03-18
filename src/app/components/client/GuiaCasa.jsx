import React from "react";

const GuiaCasa = () => {
  return (
    <div className="h-full">
      <div className="grid justify-items-center z-20 h-full rounded-xl shadow-md bg-white mb-5 sm:mt-5 mt-10 sm:mx-12">
        <iframe
          id="tour-embeded"
          title="Tour Virtual: Casa Av. El Retiro"
          src="https://tour.panoee.net/iframe/granadaavretiro"
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

export default GuiaCasa;
