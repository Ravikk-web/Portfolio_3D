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
    <div className="bg-zinc-300 text-black bg-cover bg-no-repeat bg-center bg-fixed custom-border-radius">
      <Navbar />
      <Hero />
    </div>
    <About />
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
