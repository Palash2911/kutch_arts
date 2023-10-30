import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/service";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <Navbar scrollToTop={scrollToTop} />
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
