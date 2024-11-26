'use client';

import React from 'react';
import { FaConciergeBell, FaShieldAlt, FaStar } from 'react-icons/fa';

const HomeServices: React.FC = () => {
  const services = [
    {
      icon: FaConciergeBell,
      title: "Service Personnalisé",
      description: "Profitez d'une attention sur mesure, adaptée à vos besoins uniques.",
    },
    {
      icon: FaShieldAlt,
      title: "Confidentialité Assurée",
      description: "Une gestion de vos demandes en toute sécurité et discrétion.",
    },
    {
      icon: FaStar,
      title: "Qualité Premium",
      description: "Une expertise irréprochable pour des services d'exception.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-customColor to-gray-900 min-h-[100vh] w-full space-y-20 flex flex-col items-center justify-center px-6 py-16 sm:py-24 lg:py-32">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-white font-semibold tracking-wide uppercase text-2xl sm:text-3xl mt-16">
          SERVICES & CONCIERGERIE
        </h2>
        <h3 className="text-white mt-4 text-3xl sm:text-5xl leading-tight font-extrabold tracking-tight">
          Une Conciergerie <span className="text-textColor">Engagée</span>
        </h3>
        <p className="text-gray-300 font-medium mt-6 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed">
          Découvrez une gamme complète de services conçus pour répondre à vos besoins
          les plus exigeants, avec professionnalisme et discrétion.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h4 className="text-gray-300 font-medium text-xl sm:text-2xl max-w-3xl mx-auto">
          Découvrez nos services exclusifs et laissez-nous dépasser vos attentes.
        </h4>
        <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-textColor text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
          Explorer Nos Services
        </button>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
    <Icon className="text-customColor text-5xl mb-4" aria-hidden="true" />
    <h4 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h4>
    <p className="text-gray-500 font-medium mt-3 text-sm sm:text-base">{description}</p>
  </div>
);

export default HomeServices;
