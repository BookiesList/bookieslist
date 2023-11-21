import React, { useEffect } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {

    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <div>
            <PageHeader title={'Warum gerade wir?'} />
            <div className="AboutUs-container">
                <div className="about-us">
                    <div className="card-container">
                        <motion.div id="card1" className="card"
                                initial={animateFrom}
                                animate={animateTo}
                                transition={{ delay: 0.05 }}
                        >
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.{' '}
                            </p>
                        </motion.div>
                        <motion.div id="card2" className="card"
                                initial={animateFrom}
                                animate={animateTo}
                                transition={{ delay: 0.15 }}
                        >
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.{' '}
                            </p>
                        </motion.div>
                        <motion.div id="card3" className="card"
                                initial={animateFrom}
                                animate={animateTo}
                                transition={{ delay: 0.25 }}
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
