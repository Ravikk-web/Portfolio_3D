import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />

    </div>
  </BrowserRouter>
  )
}

export default App
