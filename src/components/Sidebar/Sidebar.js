import React, { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import './Sidebar.css'
import { Link } from 'react-scroll';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    <Menu 
    isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <Link to='menu' smooth className="menu-item" onClick={closeSideBar}>MENU</Link>
        <Link to='hours' smooth className="menu-item" onClick={closeSideBar}>OTEVÍRACÍ DOBA</Link>
        <Link to='location' smooth className="menu-item" onClick={closeSideBar}>LOKACE</Link>
        <Link to='footer' smooth className="menu-item--small" onClick={closeSideBar}>KONTAKT</Link>
      </Menu>
  );
};


export default Sidebar;