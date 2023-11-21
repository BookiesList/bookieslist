import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../../assets/logo.png"

const NavLinks = (props) => {
  const [selectedLink, setSelectedLink] = useState('Home');

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (props.isMobile) {
      props.closeMobileMenu();
    }
  };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Home')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Home' ? 'selected' : ''}
      >
        <a href="/bookieslist/">
          <motion.img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px' }}
          />
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('About App')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'About App' ? 'selected' : ''}
      >
        <a href="/bookieslist/#about">Über die App</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('About Us')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'About Us' ? 'selected' : ''}
      >
        <a href="/bookieslist/#aboutus">Warum gerade wir?</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Team')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Team' ? 'selected' : ''}
      >
        <a href="/bookieslist/#team">Team</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Insight')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Insight' ? 'selected' : ''}
      >
        <a href="/bookieslist/#insight">Einblick</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Download')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Download' ? 'selected' : ''}
      >
        <a href="/bookieslist/#Download">Download</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Contact')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Contact' ? 'selected' : ''}
      >
        <a href="/bookieslist/#contact">Kontakt</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
