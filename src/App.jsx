import React from 'react'
import HeroSection from './Components/HeroSection.jsx'
import ExpertiseSection from './Components/ExpertiseSection.jsx'
import SolutionSection from './Components/SolutionSection.jsx'
import ReachUsSection from './Components/ReachUsSection.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className='bg-[#202020] text-white cursor-default overflow-x-hidden'>
      {/* Navbar is in HeroSection */}
      <HeroSection />
      <ExpertiseSection />
      <SolutionSection />
      <ReachUsSection />
      <Footer />
    </div>
  )
}

export default App