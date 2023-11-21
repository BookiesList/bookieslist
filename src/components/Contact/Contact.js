import React from 'react';
import ReactDOM from 'react-dom'; // Add ReactDOM import
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaLinkedin, FaInstagram, FaMapMarked } from 'react-icons/fa';
import Logo from "../../assets/logo.png";
import Newsletter from '../Newsletter/Newsletter';
import TeamPage from '../TeamPage/TeamPage';
import ContactPage from '../contactPage/ContactPage';
import ProblemPage from '../Problem/ProblemPage';
import SuggestionPage from '../Suggestion/SuggestionPage';


const Contacts = () => {
  const currentYear = new Date().getFullYear();

  const iconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the icons
  };

  const openTeamPage = () => {
    // Open TeamPage component in a new window
    const teamPageWindow = window.open("", "_blank", "width=400,height=400");
    teamPageWindow.document.write("<html><head><title>Über uns</title></head><body>");
    teamPageWindow.document.write("<div id='teamPage'></div>");
    teamPageWindow.document.write("</body></html>");
    ReactDOM.render(<TeamPage />, teamPageWindow.document.getElementById("teamPage"));
  };

  const openContactPage = () => {
    // Open ContactPage component in a new window
    const ContactPageWindow = window.open("", "_blank", "width=640,height=480");
    ContactPageWindow.document.write("<html><head><title>Kontakt</title></head><body>");
    ContactPageWindow.document.write("<div id='ContactPage'></div>");
    ContactPageWindow.document.write("</body></html>");
    ReactDOM.render(<ContactPage />, ContactPageWindow.document.getElementById("ContactPage"));
  };

  const openProblemPage = () => {
    // Open ProblemPage component in a new window
    const ProblemPageWindow = window.open("", "_blank", "width=640,height=480");
    ProblemPageWindow.document.write("<html><head><title>Problem?</title></head><body>");
    ProblemPageWindow.document.write("<div id='ProblemPage'></div>");
    ProblemPageWindow.document.write("</body></html>");
    ReactDOM.render(<ProblemPage />, ProblemPageWindow.document.getElementById("ProblemPage"));
  };

  const openSuggestionPage = () => {
    // Open SuggestionPage component in a new window
    const SuggestionPageWindow = window.open("", "_blank", "width=640,height=480");
    SuggestionPageWindow.document.write("<html><head><title>Du hast Vorschläge?</title></head><body>");
    SuggestionPageWindow.document.write("<div id='SuggestionPage'></div>");
    SuggestionPageWindow.document.write("</body></html>");
    ReactDOM.render(<SuggestionPage />, SuggestionPageWindow.document.getElementById("SuggestionPage"));
  };

  return (
    <div className={classes.ContactBox} id="contact">
      <div className={classes.Contact}>
        <div className={classes.BookiesLogo}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="logo" style={{ maxWidth: "15vh" }} />
          </a>
        </div>
        <div className={classes.ContactIcons}>
          <a href="https://instagram.com/bookies_list?igshid=YTQwZjQ0NmI0OA==" target="_blank">
            <FaInstagram style={iconStyle} />
          </a>
          <a href="/" target="_blank">
            <FaLinkedin style={iconStyle} />
          </a>
          <a href="/" target="_blank">
            <FaYoutube style={iconStyle} />
          </a>
          <a href="mailto:bookieslist.app@gmail.com" target="_blank">
            <FaMailBulk style={iconStyle} />
          </a>
        </div>
      </div>
      <div className={classes.Links}>
        <div className={classes.LinksChild}>
          <h2>Reach us</h2>
          <ul>
            <li>
              <div className={classes.AdressMail}>
                <FaMailBulk />
                <p>bookieslist.app@gmail.com</p>
              </div>
            </li>
            <li>
              <div className={classes.AdressAdress}>
                <FaMapMarked />
                <p>Schillerstraße 66</p>
                <p> 99096 Erfurt </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.LinksChild}>
          <h2>Bookies List</h2>
          <ul>
            <li>
              <div className={classes.About}>
                <a href="" onClick={e => { e.preventDefault(); openTeamPage(); }}> Über uns </a>
              </div>
            </li>
            <li>
              <div className={classes.AdressAdress}>
                <a href="" onClick={e => { e.preventDefault(); openContactPage(); }}> Kontakt </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.LinksChild}>
          <h2>Social Media</h2>
          <ul>
            <li>
              <div className={classes.About}>
                <a href="https://instagram.com/bookies_list?igshid=YTQwZjQ0NmI0OA==" target="_blank">Instagram</a>
              </div>
            </li>
            <li>
              <div className={classes.About}>
                <a href="/" target="_blank">LinkedIn</a>
              </div>
            </li>
            <li>
              <div className={classes.About}>
                <a href="/" target="_blank">YouTube</a>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.LinksChild}>
          <h2>Support</h2>
          <ul>
            <li>
              <div className={classes.About}>
                <a href="" onClick={e => { e.preventDefault(); openProblemPage(); }}> Problem melden </a>
              </div>
            </li>
            <li>
              <div className={classes.About}>
                <a href="" onClick={e => { e.preventDefault(); openSuggestionPage(); }}> Du hast Vorschläge? </a>
              </div>
            </li>
            <li>
              <div className={classes.About}>
                <a href="mailto:bookieslist.app@gmail.com" target="_blank">buymeacoffee</a>
              </div>
            </li>
          </ul>
        </div>
        <Newsletter />
      </div>
      <div className={classes.Copyright}>
        <p>
          &copy; {currentYear} bookieslist - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Contacts;
