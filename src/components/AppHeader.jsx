import React from 'react'

function AppHeader() {
  return (
    <header>
      <a href="/" className="logo">
        Website Name
      </a>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </header>
  )
}

export default AppHeader