import React from 'react'
import '../MainViewPage/MainViewPage.css'
import Navbar from '../Navbar/Navbar'
import logo from '../../images/logo.png'
import Sidebar from '../Sidebar/Sidebar'

export default function MainViewPage() {
  return (
    <div className='main-view-page'>
      <Navbar />
      <div href='#' className='logo'><img src={logo} /></div>
      <Sidebar />
    </div>
  )
}
