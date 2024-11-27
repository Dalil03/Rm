'use client';

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const PLATFORM_BUTTONS = [
  {
    name: "Airbnb",
    imageSrc: "/Images/arbnb_logo.svg",
    alt: "Airbnb logo - platform for short-term rentals",
    rating: 4.8,
  },
  {
    name: "Booking",
    imageSrc: "/Images/booking_logo.png",
    alt: "Booking logo - hotel booking platform",
    rating: 4.7,
  },
  {
    name: "Google",
    imageSrc: "/Images/Google__G__logo.svg.png",
    alt: "Google logo - trusted review platform",
    rating: 4.6,
  },
];

const reusableVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const motionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
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
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/carousel_1.webp')" }} // Full-screen background
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center text-white px-6 sm:px-10 space-y-12 min-h-screen flex flex-col justify-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          variants={motionVariants}
          transition={{ duration: 1 }}
        >
          La conciergerie qui <span className="text-red-500">vous libère !</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-3xl font-light mx-auto"
          variants={motionVariants}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Votre partenaire idéal pour la gestion complète de vos locations courte
          et moyenne durée. Nous prenons en charge tous les aspects de vos
          locations, du début jusqu'à la fin. Faites-nous confiance pour maximiser
          vos revenus locatifs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          variants={motionVariants}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {["Prendre Rendez-vous", "Découvrir les services"].map((text, idx) => (
            <Button key={idx} label={text} />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
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
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Button = ({ label }: { label: string }) => (
  <motion.button
    className="px-6 py-3 bg-red-500 font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {label}
  </motion.button>
);

const PlatformCard = ({ platform }: { platform: typeof PLATFORM_BUTTONS[0] }) => (
  <motion.div
    className="flex items-center gap-4 cursor-pointer bg-gray-800 bg-opacity-80 px-6 py-3 rounded-lg shadow-lg max-w-[300px]"
    variants={motionVariants}
    whileHover={{
      scale: 1.05,
      rotate: 1,
      transition: { duration: 0.3 },
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
        {[...Array(5)].map((_, i) => (
          <AiFillStar
            key={i}
            className={
              i < Math.round(platform.rating) ? "text-yellow-400" : "text-gray-500"
            }
          />
        ))}
        <span className="ml-2 text-gray-300">{platform.rating.toFixed(1)}</span>
      </div>
    </div>
  </motion.div>
);

export default HeroSection;
