import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
import books from './../../assets/books.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const booksAnimation = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView) {
                await booksAnimation.start({
                    opacity: 1,
                    transition: { duration: 1 },
                });
            }
            if (!inView) {
                await booksAnimation.start({
                    opacity: 0,
                });
            }
        };

        animateInView();
    }, [inView, booksAnimation]);

    return (
        <div className={classes.AboutBookies} id="about">
            <PageHeader title={'Willkommen bei Bookies List'} />
            <div>
                <div className={classes.Container}>
                    <div ref={ref} className={classes.BooksPhoto}>
                        <motion.img
                            className={classes.Books}
                            src={books}
                            alt="Books"
                            initial={{ opacity: inView ? 1 : 0 }}
                            animate={booksAnimation}
                        />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>

    );
}

export default About;
