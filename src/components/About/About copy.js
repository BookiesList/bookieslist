import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
import me from './../../assets/me.png';
import books from './../../assets/books.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();
    const booksAnimation = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView) {
                await animation.start({
                    opacity: 1,
                    transition: { duration: 1 },
                });
                await booksAnimation.start({
                    opacity: 1,
                    transition: { duration: 1 },
                });
            }
            if (!inView) {
                await animation.start({
                    opacity: 0,
                });
                await booksAnimation.start({
                    opacity: 0,
                });
            }
        };

        animateInView(); // Aufruf der Animation
    }, [inView, animation, booksAnimation]);

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
                            // style={{ backgroundColor: 'white' }}
                            initial={{ opacity: inView ? 1 : 0 }}
                            animate={booksAnimation}
                        />
                    </div>
                </div>
            </div>
            {/* <div className={classes.Container}>
                <div ref={ref} className={classes.Photo}>
                    <motion.img
                        className={classes.Me}
                        src={me}
                        alt="Profilepic"
                        initial={{ opacity: 0 }}
                        animate={animation}
                    />
                </div>
                <div className={classes.Text}>
                    <h2>Hallo, ich bin Andreas Brühl ...</h2>
                    <p  >
                        ... ein begeisterter DevOps-Experte in Ausbildung und AWS Cloud Practitioner auf der Suche nach einem Fullstack-Job. Meine Reise in die Technologie begann früh, und meine Leidenschaft dafür hat mich bis heute nicht losgelassen.                        </p>
                    <p  >
                        Ich verfüge über umfangreiche Kenntnisse und Erfahrungen in der Entwicklung und Bereitstellung moderner Webanwendungen. Meine Fähigkeiten umfassen Node.js, JavaScript, Python, React.js, HTML/CSS sowie die Arbeit mit Linux und Windows. Mit diesem breiten Wissensspektrum bin ich in der Lage, Lösungen auf allen Ebenen des Stacks zu entwickeln und zu optimieren.
                    </p>
                    <p  >
                        Besonders stolz bin ich auf meine Weiterbildung zum DevOps-Engineer bei der renommierten TechStarter GmbH, die ich von Februar 2023 bis Februar 2024 absolviert habe. Dort habe ich meine Fähigkeiten in den Bereichen DevOps und Cloud Computing vertieft und gelernt, wie man innovative und skalierbare Infrastrukturen entwirft und verwaltet.
                    </p>
                    <p  >
                        Ich bin ein Teamplayer mit starker Kommunikationsfähigkeit und einem offenen Geist. Ich glaube daran, dass der Schlüssel zum Erfolg darin liegt, voneinander zu lernen und zusammenzuarbeiten, um die besten Lösungen für unsere Kunden zu finden.
                    </p>
                    <p  >
                        Eine besondere Fähigkeit von mir ist die kontinuierliche Weiterentwicklung und Anpassung meiner Fähigkeiten. Ich bin überzeugt davon, dass der Technologiebereich sich ständig weiterentwickelt, und ich bin immer bereit, mich neuen Herausforderungen zu stellen und mich in neuen Technologien fortzubilden.
                    </p>
                    <p  >
                        Als Person bin ich offen, authentisch und ehrlich. Ich glaube daran, dass Vertrauen und Transparenz die Basis für eine erfolgreiche Zusammenarbeit bilden. Und natürlich gehört auch der Spaß an der Arbeit dazu – "Let's go!" ist mein Motto, wenn es darum geht, neue Projekte anzupacken und innovative Lösungen zu entwickeln.
                    </p>
                    <p  >
                        Ich freue mich darauf, mein Wissen und meine Erfahrung in einem dynamischen Team einzubringen und gemeinsam großartige Produkte zu entwickeln. Lassen Sie uns gemeinsam die Zukunft gestalten!
                    </p>
                </div>

            </div> */}
        </div>


    );
}

export default About;