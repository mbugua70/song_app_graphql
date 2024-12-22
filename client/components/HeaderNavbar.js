import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderNavbar() {
  return (
    <>
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">SongList</NavLink></li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default HeaderNavbar
