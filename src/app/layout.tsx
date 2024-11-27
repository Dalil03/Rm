"use client"
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Poppins, Ubuntu } from "next/font/google";
import { useScrollProgress } from "@/hooks/useScrollProgress"; // Import the hook

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollProgress = useScrollProgress(); // Use scroll progress hook

  return (
    <html lang="fr" className="tracking-tight">
      <body className={`${poppins.className} ${inter.className} antialiased`}>
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full z-50 h-1 bg-gray-200">
          <div
            className="h-full bg-red-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        {/* Navbar */}
        <div className="relative w-full items-center flex justify-center">
          <Navbar />
        </div>
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}