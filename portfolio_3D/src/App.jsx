import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed custom-border-radius">
      <Navbar />
      <Hero />
    </div>
    <About />
    {/* Car animation  */}
    <div className="text-center w-full bg-white text-black font-semibold text-3xl">!!! Need to add car animation here</div>
    <Experience />
    <Skills />
    <Works />
    <Feedbacks />
    <div className="w-full custom items-center justify-center">
    <Contact />
    </div>
    <Footer />

    </div>
  </BrowserRouter>
  )
}

export default App
