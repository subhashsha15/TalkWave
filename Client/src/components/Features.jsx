import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section ref={ref} className="text-gray-400 bg-gray-900 body-font">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -200 },
                    show: { opacity: 1, x: 10 }
                }}
                initial="hidden"
                animate={isInView ? "show" : ""}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
                    Why Choose TalkWave?
                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            show: { opacity: 1, x: 10 }
                        }}
                        initial="hidden"
                        animate={isInView ? "show" : ""}
                        transition={{ duration: 1, delay: 0.25 }}
                        className="p-4 md:w-1/3 flex"
                    >
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Universal Connectivity</h2>
                            <p className="leading-relaxed text-base">TalkWave is for everyone. No matter where you are or who you want to connect with, our platform bridges the gap effortlessly.</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            show: { opacity: 1, x: 10 }
                        }}
                        initial="hidden"
                        animate={isInView ? "show" : ""}
                        transition={{ duration: 2, delay: 0.25 }}
                        className="p-4 md:w-1/3 flex"
                    >
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Versatile Communication</h2>
                            <p className="leading-relaxed text-base">Engage in group chats or one-on-one conversations. TalkWave supports both text and voice calls, giving you the flexibility to communicate your way.</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            show: { opacity: 1, x: 10 }
                        }}
                        initial="hidden"
                        animate={isInView ? "show" : ""}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="p-4 md:w-1/3 flex"
                    >
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Media Sharing</h2>
                            <p className="leading-relaxed text-base">Share your moments with ease. Send images, videos, and more to your contacts, making every conversation richer and more dynamic.</p>
                            <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section >
    );
}

export default Features;
