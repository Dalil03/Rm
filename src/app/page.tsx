import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import Inscription from "@/components/inscription"
import ServicesSection from "@/components/Services/ServicesSection"
import Questions from "@/components/questions"
import MovingCards from "@/components/avis"

export default function Home() {
  return (
<>
{/* bg-black/[0.96] */}
<main>  
  <HeroSection/>
<Inscription/>
<ServicesSection />
<Questions />
</main>
<MovingCards/>

</>
  )
}

