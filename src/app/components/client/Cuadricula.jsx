"use client";
import React from "react";
import Image from "next/image";
import { abel } from "../../ui/fonts.js";
import Link from "next/link.js";

const Cuadricula = () => {
  return (
    <>
      <div className="bg-white grid h-full w-screen pt-24 justify-center items-center animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards">
        <h2
          className={`${abel.className} border-t-2 border-b-2 border-zinc-300 py-4 text-center font-bold mb-4 text-2xl text-black select-none`}
        >
          Guias de muestra
        </h2>
        <div
          className={`${abel.className} w-full grid auto-rows-auto justify-items-center justify-center sm:grid-cols-4 gap-4 sm:p-8 text-black`}
        >
          <Link href="/guiadepto" className="grid shadow-md p-12 mx-4 md:mx-2 rounded-xl backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300 w-full">
            <Image src="/img/thumbBilbao.jpg" fill className="rounded-xl" alt="Departamento" />
            <div className="grid inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm h-fit">
              <div className="grid text-center text-black px-12 items-center">
                <h3 className="py-2 text-2xl select-none">Departamento</h3>
              </div>
            </div>
          </Link>

          <Link href="/guiacasa" className="grid shadow-md p-4 mx-4 md:mx-2 rounded-xl backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300 w-full">
            <Image src="/img/thumbAvRetiro.jpg" fill className="rounded-xl" alt="Casa" />
            <div className="grid inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm h-fit">
              <div className="text-center text-black px-12">
                <h3 className="py-2 text-2xl select-none">Casa</h3>
              </div>
            </div>
          </Link>

          <Link href="/guiapaseo" className="grid shadow-md p-4 mx-4 md:mx-2 rounded-xl backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300 w-full">
            <Image src="/img/thumbZapallar.jpg" fill className="rounded-xl" alt="Paseo" />
            <div className="grid inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm h-fit">
              <div className="text-center text-black px-12">
                <h3 className="py-2 text-2xl select-none">Paseo</h3>
              </div>
            </div>
          </Link>

          <Link href="/guiaecoaldea" className="grid shadow-md p-4 mx-4 md:mx-2 rounded-xl backdrop-blur-sm h-60 bg-slate-50 bg-opacity-30 group hover:scale-105 transition-transform duration-300 w-full">
            <Image src="/img/thumbEcoAldea.jpg" fill className="rounded-xl" alt="EcoAldea" />
            <div className="grid inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm h-fit">
              <div className="text-center text-black px-12">
                <h3 className="py-2 text-2xl select-none">EcoAldea</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cuadricula;