import React from 'react'
import Rdv from '@/components/RDV/rdv'

export default function Home() {
  return (
<>
{/* bg-black/[0.96] */}
<main>  
<Rdv onClose={() => console.log("Modal fermé")} />

</main>
</>
  )
}
