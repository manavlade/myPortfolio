import React from 'react'
import { useEffect, useState } from 'react';
import LORImage from '../Cimages/LOR.jpeg';
import TCImage from '../Cimages/TC.jpeg';
import UpgradImage from '../Cimages/upgrad.jpeg'
import LOR_SYNC from '../Cimages/LOR_SYNC.jpeg';
const images = [
  LORImage,
  TCImage,
  UpgradImage,
  LOR_SYNC
];

export default function Otherc() {
  const [certificate, setcertificate] = useState(0);

  useEffect(() => {
    const changeSlides = () => {
      setcertificate((prevIndex) => (prevIndex + 1) % images.length);
    };
    const interValid = setInterval(changeSlides, 7000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <>
      <div className="main">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="parentc">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === certificate ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
