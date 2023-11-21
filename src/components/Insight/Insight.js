import classes from './Insight.module.css'
import PageHeader from '../PageHeader/PageHeader';
import Handys from "./../../assets/Handys.png"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Insight = () => {
    const [ref1, inView1] = useInView({
        threshold: 0.2,
    });

    const animation1 = useAnimation();

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

     return (
        <div className={classes.Insight} id="insight">
            <PageHeader title={'Einblick'} />
            <div className={classes.Insight}>
                <div className={classes.Container}>
                    <div ref={ref1} className={classes.Photo}>
                        <motion.img className={classes.Me} src={Handys} alt="Handys"

                            initial={{ opacity: 0 }}
                            animate={animation1}

                        />
                    </div>
                    <div className={classes.Text}>
                        <h2>Einblick</h2>
                        <p  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Insight;