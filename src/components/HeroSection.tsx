'use client';

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/carousel_1.webp')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenu principal */}
      <motion.div
        className="relative mb-10 z-10 max-w-7xl mx-auto text-center mt-20 text-white px-4 sm:px-6 lg:px-8 space-y-16"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Titre principal */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          La conciergerie qui{" "}
          <span className="text-red-500">vous libère !</span>
        </motion.h1>

        {/* Paragraphe */}
        <motion.p
          className="text-lg sm:text-xl md:text-1xl max-w-3xl font-light mx-auto"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Votre partenaire idéal pour la gestion complète de vos locations
          courte et moyenne durée. Nous prenons en charge tous les aspects de
          vos locations, du début jusqu'à la fin. Faites-nous confiance pour
          maximiser vos revenus locatifs.
        </motion.p>

        {/* Boutons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            className="bg-red-500 font-bold text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Prendre Rendez-vous
          </motion.button>
          <motion.button
            className="bg-white text-gray-900 px-6 py-3 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Découvrir les services
          </motion.button>
        </motion.div>

        {/* Évaluations des plateformes */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {PLATFORM_BUTTONS.map((platform) => (
            <motion.div
              key={platform.name}
              className="flex items-center gap-4 bg-gray-800 bg-opacity-80 px-6 py-3 rounded-lg shadow-lg max-w-[300px] mx-auto sm:mx-0"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={platform.imageSrc}
                alt={platform.alt}
                className="h-8 w-10 object-contain"
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
