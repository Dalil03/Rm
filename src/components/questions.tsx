'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Pourquoi choisir RM Conciergerie ? ",
    answer: `
      <strong>Maximisation de vos revenus</strong><br/>
      La location courte et moyenne durée représente un potentiel de rentabilité supérieur
      pour les propriétaires. Chez RM Conciergerie, nous mettons tout en œuvre pour
      augmenter vos revenus grâce à une stratégie tarifaire dynamique et des annonces
      optimisées.<br/><br/>
      <strong>Une gestion complète de votre bien</strong><br/>
      RM Conciergerie prend en charge l’ensemble des tâches liées à la gestion de votre
      location, vous libérant des contraintes du quotidien. Notre service inclut :<br/>
      • Création d’annonces attractives et shooting photo professionnel.<br/>
      • Gestion des voyageurs, de la réservation à l’accueil, en passant par l’assistance 24/7.<br/>
      • Entretien et blanchisserie professionnels pour garantir un logement impeccable.<br/>
      • Sécurisation et accès simplifié via des solutions modernes.<br/><br/>
      <strong>Tranquillité d’esprit garantie</strong><br/>
      En nous confiant la gestion de votre location, vous bénéficiez d’un service
      entièrement délégué, sans stress ni effort.
    `,
  },
  {
    question: "Comment fonctionne le processus de mise en gestion ?",
    answer:
      "Nous évaluons votre bien, créons des annonces optimisées et nous occupons de la gestion complète de vos voyageurs.",
  },
  {
    question: "Comment est calculé mon revenu ?",
    answer:
      "Votre revenu est calculé en fonction des tarifs dynamiques optimisés, moins les frais de gestion.",
  },
  {
    question: "Sélectionnez-vous les voyageurs ?",
    answer:
      "Oui, nous veillons à sélectionner des voyageurs fiables afin de garantir la sécurité de votre bien.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-[100vh] bg-gradient-to-b from-gray-50 to-gray-100 w-full py-56">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section gauche */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Ce que vous aimeriez savoir <br />
            sur notre conciergerie Airbnb
          </h2>
          <p className="text-gray-600 leading-relaxed mx-auto md:mx-0 max-w-3xl">
            Chez RM Conciergerie, chaque client et chaque bien sont traités de
            manière unique. Nous assurons une qualité irréprochable et une
            tranquillité à chaque étape.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Prendre RDV
          </motion.button>
        </motion.div>

        {/* Section droite */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div
                className="flex justify-between items-center bg-white px-6 py-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <motion.span
                  className="text-red-500 font-bold"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-6 py-4 bg-gray-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="text-gray-700 leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
