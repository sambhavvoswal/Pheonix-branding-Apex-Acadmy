import React from 'react'
import Hero from './Hero'
import Achievement from './Achievement'
import Couse from './Couse'
import DemoClassesSection from './DemoClassesSection'
import FacultySection from './FacultyCard'
import TopResults from './TopResults'
import TestimonialsSection from './TestimonialsSection'
import WhyChooseUs from './WhyChooseUs'
import BranchLocations from './BranchLocations'
import ContactNewsletter from './ContactNewsletter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Achievement />
        <Couse />
        <DemoClassesSection />
        <FacultySection />
        <TopResults />
        <TestimonialsSection /> 
        <WhyChooseUs />
        <BranchLocations />
        <ContactNewsletter />
        <Footer />
    </div>
  )
}

export default Home