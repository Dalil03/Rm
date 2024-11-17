'use client';
import React from 'react';
import { FaConciergeBell, FaShieldAlt, FaStar } from 'react-icons/fa';

const HomeServices: React.FC = () => {
  return (
    <>
      <section className="bg-customColor  min-h-[100vh] w-full space-y-20 flex flex-col items-center justify-center px-6   sm:py-24 lg:py-32 ">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-white font-semibold tracking-wide uppercase text-3xl mt-28">
            SERVICES & CONCIERGERIE
          </h2>
          <h3 className="text-white mt-4 text-4xl sm:text-5xl leading-tight font-extrabold tracking-tight">
            Une Conciergerie <span className='text-TextColor'>Engagée</span> 
          </h3>
          <p className="text-gray-300 font-medium mt-6 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Découvrez une gamme complète de services conçus pour répondre à vos besoins
            les plus exigeants, avec professionnalisme et discrétion.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
            <FaConciergeBell
            
              aria-hidden="true"
            />
            <h4 className="text-xl font-bold text-gray-800">Service Personnalisé</h4>
            <p className="text-gray-500 font-medium mt-3">
              Profitez d'une attention sur mesure, adaptée à vos besoins uniques.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
            <FaShieldAlt
          
              aria-hidden="true"
            />
            <h4 className="text-xl font-bold text-gray-800">Confidentialité Assurée</h4>
            <p className="text-gray-500 font-medium mt-3">
              Une gestion de vos demandes en toute sécurité et discrétion.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
            <FaStar
              
              aria-hidden="true"
            />
            <h4 className="text-xl font-bold text-gray-800">Qualité Premium</h4>
            <p className="text-gray-500 font-medium mt-3">
              Une expertise irréprochable pour des services d'exception.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h4 className="text-gray-300 font-medium text-2xl ">
            Découvrez nos services exclusifs et laissez-nous dépasser vos attentes.
          </h4>
          <button className="mt-6 px-8 py-4 bg-white text-customColor font-bold rounded-lg shadow-md hover:bg-gray-100 transition">
            Explorer Nos Services
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
