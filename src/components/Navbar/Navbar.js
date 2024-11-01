import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="blue-divider" smooth="true" >MENU</Link>
        </li>
        <li>
          <Link to="hours" smooth="true" >OTEVÍRACÍ&nbsp;DOBA</Link>
        </li>
        <li>
          <Link to="location" smooth="true" >LOKACE</Link>
        </li>
        <li>
          <Link to="location" smooth="true" >KONTAKT</Link>
        </li>
        <li>
        </li>
      </ul>
    </div>
  )
}

export default Navbar