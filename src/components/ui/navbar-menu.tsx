'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  isMobile?: boolean;
};

export const MenuItem = ({
  item,
  active,
  setActive,
  isMobile = false,
}: MenuItemProps) => {
  const href = item === "Services" ? "/Services" : `/${item.toLowerCase()}`;

  return (
    <motion.div
      onMouseEnter={() => !isMobile && setActive(item)}
      onMouseLeave={() => !isMobile && setActive(null)}
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
            ? "text-gray-800"
            : "text-white"
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        // User is at the top of the page, show the navbar
        setIsVisible(true);
      } else {
        // User scrolled down, hide the navbar
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 mt-6 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex flex-1 items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Images/logo_rm.png"
                alt="Logo RM"
                width={200}
                height={40}
                className="cursor-pointer mb-4"
              />
            </motion.div>
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex space-x-8 justify-center flex-1">
          {["Services", "Villes", "Investir", "Gestion"].map((item) => (
            <MenuItem
              key={item}
              setActive={setActive}
              active={active}
              item={item}
            />
          ))}
        </nav>

        {/* "Prendre RDV" button on the right */}
        <div className="hidden md:flex flex-1 justify-end">
          <motion.button
            onClick={onPrendreRDVClick}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            className="lg:px-6 md:px-1 py-3 bg-gradient-to-r from-red-500 to-red-600 font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
          >
            Prendre RDV
          </motion.button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            whileHover={{ scale: 1.2, rotate: 90, transition: { duration: 0.3 } }}
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-8 h-8" />
            ) : (
              <HiMenuAlt4 className="w-8 h-8" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg fixed top-0 right-0 h-full w-3/4 flex flex-col items-center space-y-6 py-6 backdrop-blur-md bg-opacity-90 z-50"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800 hover:text-red-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiOutlineX className="w-8 h-8" />
          </button>

          {/* Menu Items */}
          {["Services", "Villes", "Investir", "Gestion"].map((item) => (
            <MenuItem
              key={item}
              setActive={setActive}
              active={active}
              item={item}
              isMobile={true}
            />
          ))}

          {/* Mobile RDV Button */}
          <motion.button
            onClick={onPrendreRDVClick}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 font-bold text-white text-lg rounded-lg shadow-lg hover:shadow-2xl"
          >
            Prendre RDV
          </motion.button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Menu;
