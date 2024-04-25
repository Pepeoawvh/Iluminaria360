import React from "react";
import Image from "next/image";
import { questrial, abel } from "../../ui/fonts.js";

const TarjetasTour = () => {
  return (
    <div
      className={`${abel.className} grid auto-rows-min sm:grid-cols-3 sm:grid-rows-2 gap-4 sm:w-fit w-full px-4 sm:p-8 border border-solid text-black`}
    >
      <div className="grid w-full shadow-md  p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/inmobiliaria.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center text-black px-12">
            <h3 className="mt-4 text-2xl underline">
              Inmobiliarias/Corredoras
            </h3>
            <span className="grid mt-2 self-center">
              Disponer de un recorrido virtual 24/7 es una poderosa herramienta
              para tu negocio, permitirá a tus clientes acceder a los inmuebles
              desde cualquier lugar, sin necesidad de perder tiempo y recursos.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/turismo.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Turismo/Hotelería</h3>
            <span className="grid mt-2 self-center">
              Demuestre a sus clientes la calidad de su servicio de manera
              fidedigna y anticipada, esto permite una sensación de seguridad
              que otorga confianza a sus usuarios y marca la diferencia con la
              competencia.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/restaurant.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className=" text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Restaurantes</h3>
            <span className="grid  mt-8 self-center">
              Comparta la calidez de sus espacios y de a conocer a sus
              potenciales clientes la calidad y prestigio de su servicio.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/museum.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Museos/Galerías</h3>
            <span className="grid pt-2 mt-2 self-center">
              Aumenta la visibilidad y promocione exposiciones permanentes e
              itinerantes. Deje registro completo de las exhibiciones y genere
              un espacio virtual interactivo e inmersivo.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
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
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/universidad.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">
              Universidades/Instituciones
            </h3>
            <span className="grid mt-2 pt-4 self-center">
              {" "}
              Permite a los futuros estudiantes conocer y explorar los distintos
              campus y facultades. Aumente el prestigio de su institucion
              dandola a conocer de manera interactiva.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/industria.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Industria</h3>
            <span className="grid mt-2 self-center">
              Otorgue confianza a sus socios comerciales, exhibiendo sus
              instalaciones de manera inmersiva. Permita a sus futuros
              trabajadores realizar un reconocimiento previo de las
              instalaciones con el fin de agilizar los procesos de
              incorporación.{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/automotora.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Automotoras</h3>
            <span className="grid mt-2 self-center">
              Ofrezca una vista detallada de cada vehículo, genere un showroom
              virtual para aumentar sus posibilidades de venta de manera
              exponencial.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full shadow-md p-4 rounded-xl border backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300">
        <Image src="/img/aseguradora.jpg" fill className="rounded-xl" />
        <div className="grid  inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <div className="text-center  text-black px-12">
            <h3 className="mt-4 text-2xl underline">Aseguradora</h3>
            <span className="grid mt-2 self-center">
              Agilice los procesos de inspección de propiedades y vehículos y
              realice comparativas de daños.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetasTour;
