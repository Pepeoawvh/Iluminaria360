import React from 'react';
import { abel } from "../ui/fonts";
import Link from "next/link";

const QuienesSomos = () => {

    const message = encodeURIComponent("Hola, me interesa consultar por sus servicios.");
    const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;
  
    return (
        
            <section className='grid auto-rows-min w-screen h-screen bg-white justify-items-center'>
                <div className= {` ${abel.className}  bg-white mt-24 mb-12 mx-4 md:mx-96 p-6 text-black border shadow-md border-[#a6c356]`}>
                    <h2 className='text-center my-4'>Sobre Iluminaria</h2>
                    <p className='md:text-left'>
                        Ofrecemos un servicio de Guías virtuales utilizando fotografías 360° para exhibir espacios de manera única. Somos un equipo de profesionales apasionados y comprometidos con nuestro trabajo.
                    </p>
                <br />
                    <p className='text-left'>
                        Nuestro objetivo es capturar la esencia de cada lugar y transmitirlo a través de nuestras imágenes. Utilizamos tecnología de vanguardia y técnicas innovadoras para crear experiencias visuales inmersivas.
                    </p>
                    <br />
                    <p className='md:text-left'>
                        Si buscas una forma única de exhibir tus espacios, no dudes en contactarnos. Estaremos encantados de ayudarte.
                    </p>

                    
                </div>

                <Link href={whatsappUrl} className="px-8   py-4 shadow-md text-2xl text-center text-white border-4 border-white font-semibold rounded-full bg-[#4fc359] tracking-[10px] hover:bg-green-400 mb-2">
          <span className="">Contactar</span>{" "}
          </Link>
            </section>
    
    );
};

export default QuienesSomos;