import Image from "next/image";
import React from "react";
import Link from "next/link.js";
import VideoBanner from "./VideoBanner";
import { questrial, abel, bebas } from "../../ui/fonts.js";

const PromoBanner = () => {
  return (
    <div
      className={`${questrial.className} grid justify-self-center sm:grid-cols-2  self-center auto-rows-min container  sm:pt-8 sm:px-8 pt-[109.862px] `}
    >
      <Link
        href="#homeTour"
        passHref
        {...{
          scroll: true,
          prefetch: true,
          shallow: true,
        }}
      >
        <VideoBanner />
      </Link>
      <div className="grid auto-rows-min  gap-4 text-gray-900 text-5xl text-center drop-shadow animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards pt-8">
        <h3 className={`${bebas.className} drop-shadow-lg`}>
          Potencia tu Negocio
        </h3>
        <p className="text-lg pt-8 p-4">
          Ofrece una experiencia inmersiva a tus clientes, permitiendoles
          explorar los espacios desde cualquier lugar.{" "}
        </p>
        <ul className="grid gap-2 sm:w-1/2 w-[80%]  text-lg text-start justify-self-center">
          <li>✅Mejora la accesibilidad</li>
          <li>✅Ahorra tiempo y recursos</li>
          <li>✅Amplia el alcance de tu negocio</li>
          <li>✅Facil de compartir</li>
          <li>✅Personalizables</li>
        </ul>
      </div>
    </div>
  );
};

export default PromoBanner;
