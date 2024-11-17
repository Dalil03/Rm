import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import Inscription from "@/components/inscription"
import Services from "@/components/Services/ServicesSection"

export default function Home() {
  return (
<>
{/* bg-black/[0.96] */}
<main>  
  <HeroSection/>
<Inscription/>
<Services/>
</main>
</>
  )
}

