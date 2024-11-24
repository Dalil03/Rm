'use client'
import React from 'react'
import { ServiceImages } from "@/data/ServiceImage";

function SecondServices() {
  return (
    <div className="bg-SecondServices min-h-screen w-full py-12 flex justify-center">
      {/* Main container with responsive grid setup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full px-6 lg:px-12">
        
        {/* Section Image */}
        <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 lg:pl-8">
          <img 
            src={ServiceImages[1].imageSrc} 
            alt={ServiceImages[1].alt} 
            className="w-full max-w-lg h-auto rounded-lg object-cover transform transition-all duration-300 hover:scale-105
              shadow-[0_20px_50px_#FF5A5F]"
          />
        </div>

        {/* Section Texte */}
        <div className="flex flex-col justify-center gap-3 order-2 lg:order-1 sm:text-center lg:text-start sm:mt-14 md:mt-0">
          <div className="space-y-4 lg:pr-4">
            <h2 className="text-black font-semibold font-Ubuntu tracking-wider uppercase text-3xl break-words
              bg-gradient-to-r  from-red-500 to-TextColor bg-clip-text text-transparent
              transform hover:scale-[1.01] transition-transform duration-300"
            >
           Optimisation des annonces
            </h2>
            <h3 className="text-3xl leading-tight font-extrabold tracking-tight
              text-gray-800 drop-shadow-sm
              border-b-2 border-red-500/30 pb-2 inline-block"
            >
          Boostez vos réservations avec des annonces
          optimisées pour attirer plus de voyageurs.
            </h3>
            <p className="text-lg sm:text-justify text-gray-600 font-medium
              leading-relaxed
              first-letter:text-4xl first-letter:font-bold first-letter:text-red-600
              first-letter:mr-1 first-letter:float-left"
            >
         Nous ajustons continuellement vos
annonces (photos, descriptions, mots-clés) pour garantir un maximum de
visibilité sur les plateformes. Grâce à l&#39;utilisation d&#39;outils professionnels, nous
analysons et optimisons chaque aspect de vos annonces. Cela nous permet
de gérer efficacement la performance de vos biens, assurant ainsi une
visibilité optimale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondServices;
