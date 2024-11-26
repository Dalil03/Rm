"use client";

import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import Form from "@/components/RDV/rdv";
import Link from "next/link";
// Composant `MenuItem`
type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  className?: string;
  onClick?: () => void; // Permet d'ajouter une action personnalisée au clic
};

export const MenuItem = ({
  item,
  active,
  setActive,
  className,
  onClick,
}: MenuItemProps) => {
  const handleClick = () => {
    setActive(item);
    if (onClick) onClick(); // Exécute l'action personnalisée si elle est définie
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "cursor-pointer px-6 py-3 rounded-full transition-colors duration-300",
        active === item ? "bg-gray-200 text-black" : "text-gray-700",
        className
      )}
    >
      {item}
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const isVisible = useScrollVisibility();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={{ y: 0 }}
          animate={{
            y: isVisible ? 0 : -131,
            transition: { duration: 0.3 },
          }}
          className={cn(
            "fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 text-xl shadow-[rgba(0,0,0,0.3)_0px_4px_10px_-2px,_rgba(255,255,255,0.2)_0px_1px_0px_inset,_rgba(0,0,0,0.2)_0px_8px_20px_-5px] rounded-full transition-transform duration-300",
            className
          )}
        >
          <Menu setActive={setActive}>
            <p className="text-3xl absolute left-10 text-white cursor-pointer">
              .RM
            </p>

            {/* Accueil */}
            <Link href="/">
           
            <MenuItem
              setActive={setActive}
              active={active}
              item="Accueil"
              className="bg-white hover:bg-gray-100 text-black"
            />
             </Link>

             {/* Services */}
             <Link href="/Services">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Services"
              className="bg-white hover:bg-gray-100 text-black"
            />
          </Link>


            {/* Prendre RDV */}
            <MenuItem
              setActive={setActive}
              active={active}
              item="Prendre RDV"
              className="bg-textColor text-white hover:bg-opacity-90"
              onClick={() => {
                setActive("Prendre RDV");
                handleOpenModal(); // Affiche le modal au clic
              }}
            />
          </Menu>
        </motion.nav>
      </AnimatePresence>

      {/* Modal */}
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
    </>
  );
}

export default Navbar;
