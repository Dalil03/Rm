'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function ServicesSection() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <section className='py-56'>
 <div
      ref={sectionRef}
     className="relative h-auto w-full  max-w-5xl mx-auto  shadow-lg rounded-xl overflow-hidden"
    >
      {/* Section Image */}
      <motion.div
        className="relative h-96 rounded-t-xl overflow-hidden"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <img
          src="/Images/carousel_2.webp"
          alt="Real Estate Services"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Section Contenu */}
      <div className="p-8 bg-white rounded-b-xl  shadow-md text-center">
        <motion.p
          className="text-3xl font-extrabold text-textColor mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Une vision long terme
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Augmentez les revenus locatifs de{' '}
          <span className="text-textColor">votre bien immobilier</span>
        </motion.p>

        {/* Liste des services centrée */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 justify-center"
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
          <Step title="Création d'annonces attractives" />
          <Step title="Optimisation des annonces" />
          <Step title="Shooting photo professionnel" />
          <Step title="Stratégie tarifaire dynamique" />
          <Step title="Gestion complète des voyageurs" />
          <Step title="Sécurisation et accès simplifié" />
          <Step title="Entretien et blanchisserie professionnels" />
          <Step title="Gestion des litiges" />
        </motion.div>

        {/* Texte supplémentaire */}
        <motion.p
          className="text-gray-500 mt-6 text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Texte supplémentaire si nécessaire */}
        </motion.p>

        {/* Bouton d'action */}
        <motion.button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          Découvrez nos services
        </motion.button>
      </div>
    </div>
    </section>
   
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <motion.li
      className="flex items-center gap-4 justify-start"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <CheckIcon />
      <p className="text-gray-700 text-lg leading-relaxed">{title}</p>
    </motion.li>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-red-500"
      whileHover={{ scale: 1.2, rotate: 20 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14.59L6.41 13 7.83 11.59l2.59 2.58L16.17 8l1.42 1.41z"
      />
    </motion.svg>
  );
};

export default ServicesSection;
