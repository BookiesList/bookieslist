import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Newsletter.module.css'

const Newsletter = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bookieslist', 'template_bookieslist', form.current, 'H3QHnQYAViE2N6oFr')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const fadeInOut = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.Form}>
      <h2>Join our Newsletter today!</h2>
      <div  className={classes.Name}>
        <label> Name </label><br />
        <input type="text" name="user_name" required  className={classes.NameInput}/>
      </div>
      <div  className={classes.Email}>
        <label> Email </label><br />
        <input type="email" name="user_email" required  className={classes.EmailInput}/><br />
      </div>
      <div  className={classes.Message}>
        <label> Message </label><br />
        <textarea name="message" className={classes.MessageInput}/><br />
      </div>
      <div>
        <input type="submit" value="Abonnieren" className={classes.Button}/>
      </div>
      <div  className={classes.h4}>
        <h4>*monatliche Updates zu anstehenden Dingen. KOSTENLOS.</h4>
      </div>
      <AnimatePresence>
        {isEmailSent && (
          <motion.p
            key="sent"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInOut}
            transition={{ duration: 2 }}
          >
            Newsletteranfrage erfolgreich gesendet!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

export default Newsletter;