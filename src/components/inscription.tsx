'use client';

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRegCalendarCheck, FaHome, FaRocket } from "react-icons/fa";

export const projects = [
  {
    title: "Prendre rendez-vous",
    description:
      "Nous prenons contact avec vous pour répondre à toutes vos questions sur la conciergerie et prévoir une future visite.",
    link: "#",
    icon: <FaRegCalendarCheck className="text-4xl text-red-500 cursor-pointer" />,
  },
  {
    title: "Visite du logement",
    description:
      "Nous venons visiter votre logement, afin de noter toutes vos remarques, recommandations et tous les défauts du logement.",
    link: "/",
    icon: <FaHome className="text-4xl text-red-500 cursor-pointer" />,
  },
  {
    title: "Lancement des services",
    description:
      "Après la signature du contrat et la remise des clés, nous commençons à travailler sur votre annonce !",
    link: "//",
    icon: <FaRocket className="text-4xl text-red-500 cursor-pointer" />,
  },
];

function Inscription() {
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
    <div
      ref={sectionRef}
      className="font-Ubuntu h-[58rem] bg-gray-100 w-full flex flex-col items-center py-20 sm:py-28 min-h-screen" // Ensure the section fills the screen height
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12 px-4 sm:px-0"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gray-800 font-semibold tracking-wide uppercase text-lg sm:text-xl">
          Comment ça marche ?
        </h2>
        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-red-500">
          Une inscription en 3 étapes
        </h3>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="w-full max-w-6xl px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 15,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-4"
            >
              {project.icon}
            </motion.div>
            {/* Title */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h4>
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {project.description}
            </p>
            {/* Link */}
            <a
              href={project.link}
              className="text-red-500 font-semibold hover:underline"
            >
              En savoir plus →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Information */}
      <motion.div
        className="mt-16 text-center text-lg sm:text-xl font-medium tracking-tight px-4 sm:px-0 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>Conciergerie immobilière</p>
        <p>Spécialisée en location courte durée</p>
        <p>
          <span className="text-textColor">Maximisez</span> vos revenus, sans lever le petit doigt !
        </p>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-red-500 font-bold text-white text-lg rounded-lg shadow-md hover:shadow-lg"
        whileHover={{
          scale: 1.05,
          backgroundColor: "#e11d48",
        }}
        transition={{ duration: 0.3 }}
      >
        Contactez-nous
      </motion.button>
    </div>
  );
}

export default Inscription;
