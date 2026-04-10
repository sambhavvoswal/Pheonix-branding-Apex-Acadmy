import React from 'react'
import HeroBG from './hero/HeroBG'
import jee from '../assets/jee.png'
import neet from '../assets/neet.png'
import upsc from '../assets/upsc.png'
import general from '../assets/general.png'
import FloatingLogos from './hero/FloatingLogos'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
return (
    <div className='relative min-h-screen w-full max-w-full overflow-hidden flex flex-col items-center justify-center gap-8 text-white px-4 py-8 md:px-8 pt-24 md:pt-32'> 
        
        <HeroBG/>

        <div className='text-2xl md:text-4xl text-center max-w-4xl font-[Nunito]'>Crack Your Dream Exam with India's Top - <span className='text-orange-500 font-bold'>Mentors</span></div>
        <div className='text-base md:text-lg text-center p-4 max-w-2xl font-[Nunito]'>
            Join 50,000+ students who achieved top ranks in JEE, NEET & UPSC.
        </div>  

        {/*CTA  button */}
        <div className='flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md sm:max-w-none'>
            <button className='bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 w-full sm:w-auto'>
                Enroll Now 
            </button>
            <button className=' flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-md bg-gray-800/50 hover:bg-orange-100 w-full sm:w-auto'>
                Book a free demo
                <FaArrowRight />
            </button>
        </div>

        {/*Floating logos*/}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-8 max-w-full px-4'>
        <FloatingLogos left="10%" right="auto" imagePath={jee} />
        <FloatingLogos imagePath={neet} />
        <FloatingLogos imagePath={upsc} />
        <FloatingLogos imagePath={general} />
        </div>
    
    </div>
    )
}

export default Hero