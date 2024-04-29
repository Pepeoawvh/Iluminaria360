'use client'
import React from "react";

const Cuadricula = () => {
  return (
    <>
      <div className="grid gap-8 px-12 auto-rows-min w-full h-full text-black bg-white">
        <div>Otros Ejemplos</div>
        <div className="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none">
          <iframe
            id="panoee-tour-embeded"
            name="Panal del Mar EcoAldea"
            src="https://tour.panoee.com/iframe/panal-del-mar-ecoaldea"
            frameBorder="12px"
            width="100%"
            height="400px"
            scrolling="no"
            allowvr="yes"
            allow="vr; xr; accelerometer; gyroscope; autoplay;"
            allowFullScreen="false"
            webkitallowfullscreen="false"
            mozallowfullscreen="false"
            loading="eager"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div className="grid grid-cols-2">
        <div>TEXTO </div>
          <iframe
            id="panoee-tour-embeded"
            name="Zapallar"
            src="https://tour.panoee.com/iframe/zapallar-bB64L5L66"
            frameBorder="0"
            width="100%"
            height="400px"
            scrolling="no"
            allowvr="yes"
            allow="vr; xr; accelerometer; gyroscope; autoplay;"
            allowFullScreen="false"
            webkitallowfullscreen="false"
            mozallowfullscreen="false"
            loading="eager"
            className="rounded-2xl shadow-md"

          />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Cuadricula;
