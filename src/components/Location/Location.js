import React from 'react'
import './Location.css'
import Carousel from '../Carousel/Carousel'
import image_1 from '../../images/carousel_gallery/1.webp'
import image_2 from '../../images/carousel_gallery/2.webp'
import image_3 from '../../images/carousel_gallery/3.webp'
import image_4 from '../../images/carousel_gallery/4.webp'

const Location = () => {
    const images = [
        <img src={image_1}></img>,
        <img src={image_2}></img>,
        <img src={image_3}></img>,
        <img src={image_4}></img>
      ];
  return (
    <div className='location'>
        <div>
            <h4>Kde nás najdete</h4>
            <div>
                <p>Železný <br></br> Brod</p>
                <p>nábřeží Obránců míru 134</p>
            </div>
        </div>
        <div className='location-carousel'>
            <Carousel images={images} />
        </div>
    </div>
  )
}

export default Location