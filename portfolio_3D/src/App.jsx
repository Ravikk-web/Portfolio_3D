import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed custom-border-radius">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />

    </div>
  </BrowserRouter>
  )
}

export default App
