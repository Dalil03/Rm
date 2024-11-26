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
    icon: <FaRegCalendarCheck className="text-4xl text-red-500" />,
  },
  {
    title: "Visite du logement",
    description:
      "Nous venons visiter votre logement, afin de noter toutes vos remarques, recommandations et tous les défauts du logement.",
    link: "/",
    icon: <FaHome className="text-4xl text-red-500" />,
  },
  {
    title: "Lancement des services",
    description:
      "Après la signature du contrat et la remise des clés, nous commençons à travailler sur votre annonce !",
    link: "//",
    icon: <FaRocket className="text-4xl text-red-500" />,
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
      className="font-Ubuntu bg-gray-100 min-h-screen w-full flex flex-col items-center py-36"
    >
      {/* Titre de la section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-black font-semibold tracking-wide uppercase text-3xl">
          Comment ça marche ?
        </h2>
        <br />
        <h3 className="text-5xl leading-8 font-extrabold tracking-tight text-red-500">
          Une inscription en 3 étapes
        </h3>
      </motion.div>

      {/* Cartes */}
      <motion.div
        className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Délai progressif entre chaque carte
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Icône avec animation au survol */}
            <motion.div
              whileHover={{
                scale: 1.2, // Zoom
                rotate: 15, // Rotation
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-4"
            >
              {project.icon}
            </motion.div>
            {/* Titre */}
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h4>
            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>
            {/* Lien */}
            <a
              href={project.link}
              className="text-red-500 font-semibold hover:underline"
            >
              En savoir plus →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Texte en dessous des cartes */}
      <motion.div
        className="mt-24 text-center text-3xl font-semibold tracking-tight space-y-2"
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
        <p>Maximisez vos revenus, sans lever le petit doigt !</p>
      </motion.div>

      {/* Bouton Call-to-Action */}
      <motion.button
        className="mt-8 px-6 py-3 bg-textColor font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
        whileHover={{
          scale: 1.1, // Zoom
          backgroundColor: "#e11d48", // Couleur légèrement plus foncée
        }}
        transition={{ duration: 0.3 }}
      >
        Contactez-nous
      </motion.button>
    </div>
  );
}

export default Inscription;
