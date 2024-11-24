'use client'
import React from 'react'
import { ServiceImages } from "@/data/ServiceImage";

function ThirdSection() {
  return (
    <div className="bg-EigthServices min-h-screen w-full py-12 flex justify-center">
    {/* Main container with responsive grid setup */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full px-6 lg:px-12">
      
      {/* Section Image */}
      <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 lg:pl-8">
        <img 
          src={ServiceImages[7].imageSrc} 
          alt={ServiceImages[7].alt} 
          className="w-full max-w-lg h-auto rounded-lg object-cover transform transition-all duration-300 hover:scale-105
       shadow-[0_25px_60px_rgba(220,_38,_38,_0.8)] hover:shadow-[0_25px_60px_rgba(59,_130,_246,_0.8)]"
        />
        
      </div>

      {/* Section Texte */}
      <div className="flex flex-col justify-center gap-3 order-2 lg:order-1 sm:text-center lg:text-start sm:mt-14 md:mt-0">
        <div className="space-y-4 lg:pr-4">
          <h2 className="text-black font-semibold font-Ubuntu tracking-wider uppercase text-3xl break-words
            bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent
            transform hover:scale-[1.01] transition-transform duration-300"
          >
   Entretien et blanchisserie professionnels
          </h2>
          <h3 className="text-3xl leading-tight font-extrabold tracking-tight
            text-gray-800 drop-shadow-sm
            border-b-2 border-red-500/30 pb-2 inline-block"
          >
      Assurez un intérieur toujours
      impeccable à vos voyageurs.
          </h3>
          <p className="text-lg sm:text-justify text-gray-600 font-medium
            leading-relaxed
            first-letter:text-4xl first-letter:font-bold first-letter:text-red-600
            first-letter:mr-1 first-letter:float-left"
          >
Grâce à des femmes de ménage hautement
compétentes et expérimentées, chaque coin de votre propriété est
soigneusement nettoyé, et le linge est toujours frais et impeccable. Nous
veillons à ce que chaque détail soit pris en charge pour offrir à vos voyageurs
une expérience irréprochable. Un logement propre est la clé pour des avis 5
étoiles et des clients satisfaits !
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ThirdSection;
