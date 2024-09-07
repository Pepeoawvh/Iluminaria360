import React from "react";
import PromoBanner from "./components/client/PromoBanner";
import TarjetasTour from "./components/client/TarjetasTour";
import GuiaDepartamento from "./components/client/GuiaDepartamento";

export default function Home() {
  return (
    <>
      <div className="grid justify-center w-screen bg-white bg-opacity-85 backdrop-blur-sm">
        <PromoBanner />
        <GuiaDepartamento />
        <TarjetasTour />
      </div>
    </>
  );
}
