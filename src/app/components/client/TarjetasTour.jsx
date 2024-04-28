import React from "react";
import Image from "next/image";
import { questrial, abel } from "../../ui/fonts.js";

const TarjetasTour = () => {
  return (
    <>
      <h2
        className={`${abel.className} mt-4 pb-4 text-center font-bold text-2xl text-black select-none`}
      >
        Beneficios para su negocio
      </h2>
      <div
        className={`${abel.className} grid auto-rows-min w-screen justify-items-center sm:grid-cols-3 sm:grid-rows-2 gap-4 sm:w-fit sm:m-8  -solid text-black`}
      >
        <div className="grid w-[90%] shadow-md  p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/inmobiliaria.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/turismo.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/restaurant.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/museum.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <iframe
            id="panoee-tour-embeded"
            name="Zapallar"
            src="https://tour.panoee.com/iframe/zapallar-bB64L5L66"
            frameBorder="0"
            width="100%"
            height="100%"
            scrolling="no"
            allowvr="yes"
            allow="vr; xr; accelerometer; gyroscope; autoplay;"
            allowFullScreen="false"
            webkitallowfullscreen="false"
            mozallowfullscreen="false"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/universidad.jpg" fill className="rounded-xl" />
          <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
            <div className="text-center  text-black px-12">
              <h3 className="mt-4 text-2xl underline select-none">
                Universidades/Instituciones
              </h3>
              <span className="grid pt-2 mt-2 self-center select-none">
                Permite a los futuros estudiantes conocer y explorar los
                distintos campus y facultades. Aumente el prestigio de su
                institucion dandola a conocer de manera interactiva.
              </span>
            </div>
          </div>
        </div>
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/industria.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/automotora.jpg" fill className="rounded-xl" />
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
        <div className="grid w-[90%] shadow-md p-4 rounded-xl  backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/aseguradora.jpg" fill className="rounded-xl" />
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
        {" "}
        <span>Cotizar</span>{" "}
      </div>
      </div>

    </>
  );
};

export default TarjetasTour;
