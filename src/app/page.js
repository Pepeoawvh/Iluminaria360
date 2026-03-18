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
      <div id="homeTour" className="w-full">
        <GuiaDepartamento />
      </div>
      <Servicios />
      <TarjetasTour />
      <Precios />
    </div>
  );
}
