import React from 'react'
import HeroWithNavbar from '../components/HeroWithNavbar'
import OurJourney from '../components/OurJourney'
import ServicesSection from '../components/ServicesSection'
import AboutHeroSection from '../components/AboutHeroSection'
import ExperienceStats from '../components/ExperienceStats'
import ProjectsSection from '../components/ProjectsSection'
import ClientsSection from '../components/ClientsSection'
import ContactSection from '../components/ContactSection'
const Home = () => {
  return (
    <div>
      <HeroWithNavbar/>
      <ServicesSection/>
      <OurJourney/>
      <AboutHeroSection/>
      <ExperienceStats/>
      <ProjectsSection/>
      <ClientsSection/>
      <ContactSection/>
    </div>
  )
}
export default Home