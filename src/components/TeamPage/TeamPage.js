import Angie from "./../../assets/Angie.jpg";
import Andi from "./../../assets/Andi.jpg";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const TeamPage = () => {
    const PageHeaderCSS = {
        backgroundColor: '#AC5859',
        padding: "1vh",
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const teamPageStyle = {
        padding: '0.1vh',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const sectionStyle = {
        paddingBottom: '15vh',
    };

    const andiSectionStyle = {
        ...sectionStyle,
        backgroundColor: '#AC5859A8',
    };

    const textStyle = {
        width: '47%',
        marginLeft: '3%',
    };

    const headingStyle = {
        fontWeight: 900,
        fontFamily: "'Dancing Script', cursive",
        color: 'black',
        margin: '7vh',
    };

    const paragraphStyle = {
        color: 'black',
        margin: '7vh',
    };

    const photoStyle = {
        borderRadius: '10px',
        height: "30%",
        width: '30%',
        padding: '3vh',
        overflow: 'hidden',
    };

    const [ref1, inView1] = useInView({
        threshold: 0.2,
    });

    const [ref2, inView2] = useInView({
        threshold: 0.2,
    });

    const animation1 = useAnimation();
    const animation2 = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView1) {
                await animation1.start({
                    opacity: 1,
                    transition: { duration: 1 },
                });
            } else {
                await animation1.start({
                    opacity: 0,
                });
            }
        };

        animateInView();
    }, [inView1, animation1]);

    useEffect(() => {
        const animateInView = async () => {
            if (inView2) {
                await animation2.start({
                    opacity: 1,
                    transition: { duration: 1 },
                });
            } else {
                await animation2.start({
                    opacity: 0,
                });
            }
        };

        animateInView();
    }, [inView2, animation2]);

    return (
        <div id="teampage" style={teamPageStyle}>
            <div style={{ textAlign: 'center', color: 'white', fontFamily: "'Dancing Script', cursive", ...PageHeaderCSS }}>
                <h2>Über uns</h2>
            </div>
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <div ref={ref1} style={containerStyle}>
                        <motion.img src={Angie} alt="TeamPageAngie" style={{ ...photoStyle }} animate={animation1} />
                        <div style={textStyle}>
                            <h2 style={headingStyle}>Angie</h2>
                            <p style={paragraphStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={andiSectionStyle}>
                <div ref={ref2} style={containerStyle}>
                    <div style={textStyle}>
                        <h2 style={headingStyle}>Andi</h2>
                        <p style={paragraphStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <motion.img src={Andi} alt="TeamPageAndi" style={{ ...photoStyle }} animate={animation2} />
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
