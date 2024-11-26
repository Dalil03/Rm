"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const PLATFORM_BUTTONS = [
  {
    name: "Airbnb",
    imageSrc: "/Images/arbnb_logo.svg",
    alt: "Airbnb logo",
    rating: 4.8,
  },
  {
    name: "Booking",
    imageSrc: "/Images/booking_logo.png",
    alt: "Booking logo",
    rating: 4.7,
  },
  {
    name: "Google",
    imageSrc: "/Images/Google__G__logo.svg.png",
    alt: "Google logo",
    rating: 4.6,
  },
];

function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/carousel_1.webp')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          La conciergerie <span className="text-red-500">qui vous libère !</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Votre partenaire idéal pour la gestion complète de vos locations courte et moyenne durée.
          Nous prenons en charge tous les aspects de vos locations, du début jusqu'à la fin.
          Faites-nous confiance pour maximiser vos revenus locatifs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            Estimer mes revenus
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Découvrir le concept
          </button>
        </div>

        {/* Évaluations des plateformes */}
        <div className="flex justify-center gap-4 mt-12">
          {PLATFORM_BUTTONS.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-4 bg-gray-800 bg-opacity-80 px-6 py-3 rounded-lg shadow-lg"
            >
              <img
                src={platform.imageSrc}
                alt={platform.alt}
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="text-lg font-semibold">{platform.name}</span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`${
                        i < Math.round(platform.rating)
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-300">
                    {platform.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
