import React, { useState, useEffect } from 'react'
import FSWDIImage from '../Simages/FSWDI.jpeg';
import MLIImage from '../Simages/MLI.jpeg';
import HPIImage from '../Simages/HPEI.jpeg';
import SYNCImage from '../Cimages/CERTI_SYNC.jpg';
import BharatImage from '../Cimages/BHARAT_CERTI.jpeg'

const images = [
  FSWDIImage,
  MLIImage,
  HPIImage,
  SYNCImage,
  BharatImage
]

export default function Internshipc() {

  const [certificate, setcertificate] = useState(0);

  useEffect(() => {
    const changeSlides = () => {
      setcertificate((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalid = setInterval(changeSlides, 7000);
    return () => clearInterval(intervalid);
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
