import React from 'react'
import { Link } from 'react-router-dom'

function AppHeader() {
  return (
    <header>
      <a href="/" className="logo">
        Website Name
      </a>

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About Us</Link>
        </li>

        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>

      </ul>
    </header>
  )
}

export default AppHeader