import classes from './Download.module.css'
import PageHeader from '../PageHeader/PageHeader';
import instagram from '../../assets/instagram-logo-2.png'
import apple from '../../assets/apple.png'
import google from '../../assets/google.png'
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Download = () => {

    const { ref, inView } = useInView(
        {
            threshold: 0.2,
        }
    );
    const animation = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView) {
                await animation.start({
                    x: 0,
                    transition: { type: "spring", duration: 1, bounce: 0.3 }
                });
            }
            if (!inView) {
                await animation.start({
                    x: '100vw',
                });
            }
        }

        animateInView(); // Aufruf der Animation

    }, [inView, animation]);

    const containerStyles = {
        margin: '0 15%',
        marginTop: '-3%',
        // backgroundColor: 'rgba(135, 206, 235, 0.5)',
        padding: '2%',
        borderRadius: '20px',
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        zIndex: 2000000000000,
        maxWidth: '100vw',
        marginLeft: '20vw',
        justifyContent: 'space-between',
    };

    const textContainerStyles = {
        flex: 1,
        paddingRight: '20px',
    };

    const h2Style = {
        fontWeight: 'normal',
        fontSize: '26px',
        marginBottom: '20px',
        fontStyle: 'italic bold',
        fontFamily: '"Playfair Display", serif',
        color: 'white',
    };

    return (
        <div className={classes.Download} id="Download">
            <PageHeader title={'Instagram und Download'} />
            <div className={classes.Download}>
                <div className={classes.Container}>
                    <div className={classes.Text}>
                        <h2>Instagram</h2>
                        <p  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={classes.Insta}>
                        <a href="https://instagram.com/bookies_list?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram-logo" style={{ maxWidth: "35vh" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div ref={ref} className={classes.DownloadContent}>
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={animation}
                >

                    <div id="root">
                        <div className="welcome-section" style={containerStyles}>
                            <div style={textContainerStyles}>
                                <h2 style={h2Style}>Download</h2>
                                <br></br>
                                <a href="#download" target="_blank" rel="noopener noreferrer">
                                    <img src={google} alt="google-logo" style={{ maxWidth: "20vh" , margin: "0 10vw"}} />
                                </a>
                                <a href="#download" target="_blank" rel="noopener noreferrer">
                                    <img src={apple} alt="apple-logo" style={{ maxWidth: "20vh" , margin: "0 10vw"}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Download;
