import React, { useEffect, useRef } from 'react'
import { faqs } from '../Data';
import { motion, useAnimation, useInView } from 'framer-motion';

const FAQs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        // Function to handle the click event
        const handleClick = (event) => {
            const main = event.currentTarget;
            const element = main.parentElement.parentElement;
            const indicators = main.querySelectorAll("img");
            const child = element.querySelector("#menu");
            const h = element.querySelector("#mainHeading > div > p");

            h.classList.toggle("font-semibold");
            child.classList.toggle("hidden");
            indicators[0].classList.toggle("rotate-180");
        };

        // Select all elements with data-menu attribute
        const elements = document.querySelectorAll("[data-menu]");

        // Add event listeners
        elements.forEach(element => {
            element.addEventListener("click", handleClick);
        });

        // Cleanup function to remove event listeners
        return () => {
            elements.forEach(element => {
                element.removeEventListener("click", handleClick);
            });
        };
    }, []);
    return (
        <>
            {/* <!-- component --> */}
            <motion.div ref={ref} class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4"
                variants={{
                    hidden: { opacity: 0, x: -500 },
                    show: { opacity: 1, x: 10 }
                }}
                initial="hidden"
                animate={isInView ? "show" : ""}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <h1 class="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>
                {
                    faqs.map((faq, index) => (
                        <>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -500 },
                                    show: { opacity: 1, x: 0 }
                                }}
                                initial="hidden"
                                animate={isInView ? "show" : ""}
                                transition={{ duration: (index*0.8)+1, delay: 0.8 }}
                                class="lg:w-8/12 w-full mx-auto">
                                <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                                <div class="w-full md:px-6">
                                    <div id="mainHeading" class="flex justify-between items-center w-full">
                                        <div class="">
                                            <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"><span class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">{`Q${index + 1}`}.</span> {faq.question}</p>
                                        </div>
                                        <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                                            <img class="transform dark:hidden " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />
                                            <img class="transform dark:block hidden " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler" />
                                        </button>
                                    </div>
                                    <div id="menu" class="hidden mt-6 w-full">
                                        <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    ))
                }
            </motion.div>
        </>
    )
}

export default FAQs