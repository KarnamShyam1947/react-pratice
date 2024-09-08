import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Add from "./components/products/Add";
import All from "./components/products/All";
import Edit from "./components/products/Edit";

function App() {

  return (
    <>
      <AppHeader />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/add" element={<Add />} />
          <Route path="/all" element={<All />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>

      <AppFooter />
    </>
  )
}

export default App
