import classes from './Team.module.css'
import PageHeader from '../PageHeader/PageHeader';
import teamph1 from "./../../assets/teamph.png"
import teamph2 from "./../../assets/teamph.png"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Team = () => {
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
                    transition: { duration: 1 }
                });
            } else {
                await animation1.start({
                    opacity: 0,
                });
            }
        }

        animateInView();

    }, [inView1, animation1]);

    useEffect(() => {
        const animateInView = async () => {
            if (inView2) {
                await animation2.start({
                    opacity: 1,
                    transition: { duration: 1 }
                });
            } else {
                await animation2.start({
                    opacity: 0,
                });
            }
        }

        animateInView();

    }, [inView2, animation2]);

    return (
        <div className={classes.Team} id="team">
            <PageHeader title={'Team und Entwicklung'} />
            <div className={classes.Team}>
                <div className={classes.Container}>
                    <div ref={ref1} className={classes.Photo}>
                        <motion.img className={classes.Me} src={teamph1} alt="teamph"

                            initial={{ opacity: 0 }}
                            animate={animation1}

                        />
                    </div>
                    <div className={classes.Text}>
                        <h2>Das Team</h2>
                        <p  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
            </div>
            <div className={classes.Dev}>
                <div className={classes.Container}>
                    <div className={classes.Text}>
                        <h2>Entwicklung</h2>
                        <p  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div ref={ref2} className={classes.Photo}>
                        <motion.img className={classes.Me} src={teamph2} alt="teamph"

                            initial={{ opacity: 0 }}
                            animate={animation2}

                        />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Team;