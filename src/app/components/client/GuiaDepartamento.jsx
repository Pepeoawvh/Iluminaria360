import React from "react";

const GuiaDepartamento = () => {
  return (
    <div className="bg-[#1B2A4A] w-full py-12 px-4 md:px-12 animate-fade animate-duration-[1500ms] animate-fill-forwards">
      <h2 className="text-white text-center text-2xl font-semibold tracking-wide mb-4 uppercase opacity-80">
        Tour de muestra — Departamento Bilbao, Quilpué
      </h2>
      <div className="w-full max-w-5xl mx-auto" style={{ height: '520px' }}>
        <iframe
          id="panoee-tour-embeded"
          title="Tour Virtual: Departamento Bilbao, Quilpué"
          src="https://tour.panoee.com/iframe/depto-bilbao-quilpue"
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="no"
          allow="vr; xr; accelerometer; gyroscope; autoplay; fullscreen"
          allowFullScreen
          loading="eager"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default GuiaDepartamento;
