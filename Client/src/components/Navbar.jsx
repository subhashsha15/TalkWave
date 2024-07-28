import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Navbar = ({ isInView }) => {
    return (
        <motion.nav
            variants={{
                hidden: { opacity: 0, y: -600 },
                show: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={isInView ? "show" : ""}
            transition={{ duration: 3.5, ease: "easeOut" }}
            id="header" className="w-full z-30 py-1 bg-transparent absolute shadow-lg  mt-0">
            <div className="w-full flex items-center justify-between mt-0 px-20 py-2">
                <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <ul class="md:flex items-center justify-between text-base gap-3 pt-4 md:pt-0">
                            <li className='h-16 w-16 bg-transparent text-white'><img src="/logo-icon.png" alt="" /></li>
                            <li className='text-4xl text-white font-bold'>TalkWave</li>
                        </ul>
                    </nav>
                </div>
                <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div class="auth flex items-center w-full md:w-full">
                        <Link to="/email">
                            <button className="bg-[rgb(0,172,180)] text-gray-200  py-2 px-8 rounded  hover:bg-[rgba(0,171,180,0.7)] hover:text-gray-100">Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar