import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Inter, Poppins,Ubuntu } from 'next/font/google';
// import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="tracking-tight" >
      <body className={`${poppins.className} ${inter.className} antialiased`}>
        <div className="relative w-full items-center flex justify-center">
          <Navbar />
        </div>
        {/* <SmoothScroll> */}
          {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}