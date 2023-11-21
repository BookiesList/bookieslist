

import About from './components/About/About';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Download from './components/Download/Download';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import NavBar from './components/NavBar/NavBar';
import Insight from './components/Insight/Insight';
import TeamPage from './components/TeamPage/TeamPage';

const App = () => {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>

      <NavBar />
      <Home />
      <About />
      <AboutUs />
      <Team />
      <Insight />
      <Download />
      <Contact />

    </div>
  );
}

export default App;
