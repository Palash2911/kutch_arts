import React from 'react';
import Navbar from './components/navbar/Navbar';
import Vision from './components/vision/Vision'
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import { animateScroll as scroll } from 'react-scroll';
import "./App.css"
import Home from './components/home/Home';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      
      <Navbar scrollToTop={scrollToTop} />
      <Home/>
      <Vision />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
