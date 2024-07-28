import React, { useEffect, ref } from 'react';
import { testimonials } from '../Data';
import useMeasure from 'react-use-measure'
import { motion, animate, useMotionValue } from 'framer-motion'
const Slider = () => {
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })
        return controls.stop;

    }, [xTranslation, width])

    return (
        <>
            <motion.div className='flex items-center gap-8 w-full' ref={ref} style={{ x: xTranslation }}>
                {[...testimonials,...testimonials].map((testimonial, index) => (
                    <div key={index} className="flex flex-shrink-0  w-[560px] h-[210px]">
                        <div className="dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                            <p className="text-lg text-gray-400">{testimonial.text}</p>
                            <div className="flex mt-4 justify-end">
                                <div className="w-14 h-14 mr-4 md:w-16 md:h-16">
                                    <img className="rounded-full" src={testimonial.profilePicture} alt={`${testimonial.name} Profile Picture`} />
                                </div>
                                <div className="md:text-lg">
                                    <div className="flex flex-row">
                                        <p className="font-semibold text-white mr-2">{testimonial.name}</p>
                                        <div className="flex gap-3">
                                            <a href={testimonial.linkedin} className="dark:hover:text-blue-500 transition-colors duration-75" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a href={testimonial.twitter} className="dark:hover:text-blue-500 transition-colors duration-75" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-300">
                                        {testimonial.position} | <a href="#" className="hover:underline hover:cursor-pointer hover:text-blue-500 transition-colors duration-75">{testimonial.company}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default Slider;
