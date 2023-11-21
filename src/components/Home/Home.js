import classes from './Home.module.css';
import headerbg from './../../assets/headerbg.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const textAnimateFrom = { opacity: 0, y: 20 };
  const textAnimateTo = { opacity: 1, y: 0 };

  return (
    <div className={classes.Home} id="/">
      <div className={classes.headerbg}>
        <motion.img 
          initial={{ scale: 1.5 }}
          animate={{ scale: [1.5, 1] }}
          transition={{ delay: 1.4, duration: 2, ease: 'easeInOut' }}
          src={headerbg} 
          alt='headerbg' 
        />
        <motion.div
          initial={textAnimateFrom}
          animate={textAnimateTo}
          transition={{ delay: 1.4, duration: 2, ease: 'easeInOut' }}
          className={classes.overlayText}
        >
          <h2 style={{ color: '#FEC89A' }}>Für wieder mehr Zeit zum lesen</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
