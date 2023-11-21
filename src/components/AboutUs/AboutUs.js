import React, { useEffect, useRef } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';

const AboutUs = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const cardsAnimation = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView) {
                await Promise.all([
                    cardsAnimation.start({
                        opacity: 1,
                        transition: { duration: 1, delay: 0.05 },
                    }),
                    cardsAnimation.start({
                        opacity: 1,
                        transition: { duration: 1, delay: 0.15 },
                    }),
                    cardsAnimation.start({
                        opacity: 1,
                        transition: { duration: 1, delay: 0.25 },
                    }),
                ]);
            }
            if (!inView) {
                await cardsAnimation.start({
                    opacity: 0,
                });
            }
        };

        animateInView();
    }, [inView, cardsAnimation]);


    return (
        <div id="aboutus">
            <PageHeader title={'Warum gerade wir?'} />
            <div className="AboutUs-container">
                <div className="about-us">
                    <div className="card-container" ref={ref}>
                        <motion.div
                            id="card1"
                            className="card"
                            alt="cards"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ delay: 0.05, duration: 1 }}
                        >
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.{' '}
                            </p>
                        </motion.div>
                        <motion.div
                            id="card2"
                            className="card"
                            alt="cards"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ delay: 0.15, duration: 1 }}
                        >
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.{' '}
                            </p>
                        </motion.div>
                        <motion.div
                            id="card3"
                            className="card"
                            alt="cards"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ delay: 0.25, duration: 1 }}
                        >
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.{' '}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
