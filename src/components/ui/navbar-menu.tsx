'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  isMobile?: boolean; // Ajout pour différencier le mobile
};

export const MenuItem = ({ item, active, setActive, isMobile = false }: MenuItemProps) => {
  const href = item === "Services" ? "/Services" : `/${item.toLowerCase()}`;

  return (
    <motion.div
      onMouseEnter={() => !isMobile && setActive(item)} // Pas de hover sur mobile
      onMouseLeave={() => !isMobile && setActive(null)} // Pas de hover sur mobile
      className="relative"
      whileHover={!isMobile ? { scale: 1.05 } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={href}
        className={`cursor-pointer px-4 py-2 rounded-md text-lg font-bold ${
          active === item
            ? "bg-red-500 text-white"
            : isMobile
            ? "text-black" // Texte noir sur mobile
            : "text-white" // Texte blanc sur desktop
        } hover:bg-red-500 hover:text-white transition-all`}
      >
        {item}
      </Link>
    </motion.div>
  );
};

type MenuProps = {
  onPrendreRDVClick: () => void;
};

export const Menu = ({ onPrendreRDVClick }: MenuProps) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-transparent z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Images/logo_rm.png"
            alt="Logo RM"
            width={200}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["Services", "Villes", "Investir", "Gestion"].map((item) => (
            <MenuItem
              key={item}
              setActive={setActive}
              active={active}
              item={item}
            />
          ))}
          {/* Bouton "Prendre RDV" */}
          <button
            onClick={onPrendreRDVClick}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-lg font-bold"
          >
            Prendre RDV
          </button>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-8 h-8" />
            ) : (
              <HiMenuAlt4 className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full flex flex-col items-center space-y-6 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Services", "Villes", "Investir", "Gestion"].map((item) => (
            <MenuItem
              key={item}
              setActive={setActive}
              active={active}
              item={item}
              isMobile={true} // Spécifie que c'est pour mobile
            />
          ))}
          {/* Mobile RDV Button */}
          <button
            onClick={onPrendreRDVClick}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-lg font-bold"
          >
            Prendre RDV
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Menu;
