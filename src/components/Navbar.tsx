"use client";

import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import Form from "@/components/RDV/rdv";

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false); // État pour gérer l'affichage du modal

  const handleOpenModal = () => setModalOpen(true); // Ouvre le modal
  const handleCloseModal = () => setModalOpen(false); // Ferme le modal

  return (
    <header className="fixed top-0 left-0 w-full  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Menu principal */}
        <Menu onPrendreRDVClick={handleOpenModal} />

      </div>

      {/* Modal RDV */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-xl relative">
            {/* Bouton pour fermer le modal */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Contenu du modal */}
            <Form onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
