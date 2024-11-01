import React from 'react'
import './Menu.css'
import Carousel from '../Carousel/Carousel'
import MenuCoffee from '../MenuSlides/MenuCoffee/MenuCoffee';
import MenuDrinks from '../MenuSlides/MenuDrinks/MenuDrinks';
import MenuFood from '../MenuSlides/MenuFood/MenuFood';

const Menu = () => {
  const images = [
    <MenuCoffee />,
    <MenuDrinks />,
    <MenuFood />
  ];
  return (
    <section className='menu-wrapper menu'>
      <Carousel images={images} />
    </section >
  )
}

export default Menu