"use client";
import React from "react";
import Image from "next/image";
import { abel } from "../../ui/fonts.js";
import GuiaPaseo from "./GuiaPaseoZ.jsx";
import Link from "next/link";

const TarjetasTour = () => {
  const message = encodeURIComponent("Hola, me interesa consultar por sus servicios.");
  const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;

  return (
    <>
      <h2
        className={`${abel.className} mt-4 pb-4 text-center font-bold text-2xl text-black select-none`}
      >
        Beneficios para su negocio
      </h2>
      <div
        className={`${abel.className} grid auto-rows-auto w-screen justify-items-center items-center sm:grid-cols-3 sm:grid-rows-3 gap-4 sm:w-fit sm:m-8 text-black`}
      >
        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/inmobiliaria.jpg" fill className="rounded-xl" alt="Inmobiliaria" />
          <div className="grid inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Inmobiliarias/Corredoras
              </h3>
              <span className="grid mt-2 self-center select-none">
                Disponer de un recorrido virtual 24/7 es una poderosa
                herramienta para tu negocio, permitirá a tus clientes acceder a
                los inmuebles desde cualquier lugar, sin necesidad de gastar
                tiempo y recursos.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/turismo.jpg" fill className="rounded-xl" alt="Turismo" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Turismo/Hotelería
              </h3>
              <span className="grid mt-2 self-center select-none">
                Demuestra a tus clientes la calidad de tu servicio de manera
                fidedigna y anticipada, esto permite una sensación de seguridad
                que otorga confianza a los usuarios y marca la diferencia con la
                competencia.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/restaurant.jpg" fill className="rounded-xl" alt="Restaurante" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className=" text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Restaurantes
              </h3>
              <span className="grid  mt-8 self-center select-none">
                Comparta la calidez de sus espacios y de a conocer a sus
                potenciales clientes la calidad y prestigio de su servicio.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/museum.jpg" fill className="rounded-xl" alt="Museo" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Museos/Galerías
              </h3>
              <span className="grid pt-2 mt-2 self-center select-none">
                Aumente la visibilidad y promueva exposiciones permanentes e
                itinerantes. Deje registro completo de las exhibiciones y genere
                un espacio virtual interactivo.
              </span>
            </div>
          </div>
        </div>

        <div className="grid  rounded-xl w-full backdrop-blur-sm h-60 group hover:scale-105 transition-transform duration-300 px-4 md:px-2  ">
          <GuiaPaseo />
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/universidad.jpg" fill className="rounded-xl" alt="Universidad" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Instituciones Educativas
              </h3>
              <span className="grid pt-2 mt-2 self-center  text-sm select-none">
                Permite a los futuros estudiantes conocer y explorar los
                distintos campus y facultades. Aumente el prestigio de su
                institucion dandola a conocer de manera interactiva.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/industria.jpg" fill className="rounded-xl" alt="Industria" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">Industria</h3>
              <span className="grid mt-4 self-center text-sm select-none">
                Otorgue confianza a sus socios comerciales, exhibiendo sus
                instalaciones de manera detallada. O permita a sus futuros
                colaboradores hacer reconocimiento previo de instalaciones y
                agilizar procesos de incorporación.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/automotora.jpg" fill className="rounded-xl" alt="Automotora" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Automotoras
              </h3>
              <span className="grid mt-4 self-center select-none">
                Ofrezca una vista detallada de cada vehículo, genere un showroom
                virtual para aumentar sus posibilidades de venta de manera
                exponencial.
              </span>
            </div>
          </div>
        </div>

        <div className="grid shadow-md  p-4 mx-4 md:mx-2  rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/aseguradora.jpg" fill className="rounded-xl" alt="Aseguradora" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Aseguradora
              </h3>
              <span className="grid mt-4 self-center select-none">
                Genere un registro fidedigno y agilice procesos de inspección de
                propiedades y vehículos, o realice comparativas para evaluacion
                de daños.
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:col-span-3 mx-12 text-black">
          
          <Link href={whatsappUrl} className="px-8   py-4 shadow-md text-2xl text-center text-white border-4 border-white font-semibold rounded-full bg-[#4fc359] tracking-[15px] hover:bg-slate-50 mb-2">
          <span className="">Cotizar</span>{" "}
          </Link>
        </div>

      </div>
    </>
  );
};

export default TarjetasTour;