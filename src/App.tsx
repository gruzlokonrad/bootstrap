import React from 'react';
import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Splash from './components/Splash/Splash';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Splash />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
