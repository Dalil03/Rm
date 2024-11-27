'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { faqItems } from "@/data/faqData";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[59.3rem] bg-gray-100 from-gray-50 to-gray-100 py-20 sm:py-28"
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section */}
        <motion.div
          className="text-center sm:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
            Ce que vous aimeriez savoir <br />
            sur notre conciergerie{" "}
            <span className="text-red-500">Airbnb</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
            Chez RM Conciergerie, chaque client et chaque bien sont traités de manière unique.
            Nous assurons une qualité irréprochable et une tranquillité à chaque étape.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#e11d48",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
          >
            Prendre RDV
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="flex justify-between items-center bg-white px-4 py-3 sm:px-6 sm:py-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
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
                    className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2"
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
