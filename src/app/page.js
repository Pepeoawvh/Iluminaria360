import React from "react";
import PromoBanner from "./components/client/PromoBanner";
import TarjetasTour from "./components/client/TarjetasTour";
import GuiaDepartamento from "./components/client/GuiaDepartamento";
import Servicios from "./components/client/Servicios";
import Precios from "./components/client/Precios";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <PromoBanner />
      <div id="homeTour" className="md:h-screen h-[500px] px-4 md:px-8 pb-8">
        <GuiaDepartamento />
      </div>
      <Servicios />
      <TarjetasTour />
      <Precios />
    </div>
  );
}
