import { useState } from "react";
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {

  return (
    <>
      <AppHeader />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <AppFooter />
    </>
  )
}

export default App
