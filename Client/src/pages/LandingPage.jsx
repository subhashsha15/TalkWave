import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Headers from '../components/Headers';
import Features from '../components/Features';
import { motion, useAnimation, useInView } from 'framer-motion';
const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <>
      <div className=' flex flex-col gap-20 w-full bg-gray-900 overflow-x-hidden'>
        <Navbar isInView={isInView}/>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: -600 },
            show: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={isInView ? "show" : ""}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Headers />
        </motion.div>
        {/* Features */}
        <Features />
        {/* Features */}
        {/* caraousals */}
        <Slider />
        {/* caraousals */}
        {/* FAQs */}
        <FAQs />
        {/* FAQs */}
        <Footer />
      </div>
    </>
  )
}

export default LandingPage