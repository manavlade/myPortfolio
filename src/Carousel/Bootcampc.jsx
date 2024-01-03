import React, { useState, useEffect } from 'react'
import Devop from '../Cimages/Devopb.jpeg';
import DevopG from '../Cimages/DevopbG.jpeg';
import DevopM from '../Cimages/DevopsbM.jpeg';
import AI from '../Cimages/AIB.jpeg';
import AIG from '../Cimages/AIBG.jpeg';
import AIM from '../Cimages/AIBM.jpeg';
import PORT from '../Cimages/PortB.jpeg';
import PORTG from '../Cimages/PortBG.jpeg';
import PORTM from '../Cimages/PortBM.jpeg';
import ARRAY from '../Cimages/ARRB.jpeg';
import ARRAYG from '../Cimages/ARRBG.jpeg';
import ARRAYM from '../Cimages/ARRBM.jpeg';

const images = [
  Devop,
  DevopG,
  DevopM,
  AI,
  AIG,
  AIM,
  PORT,
  PORTG,
  PORTM,
  ARRAY,
  ARRAYG,
  ARRAYM
];

export default function Bootcampc() {

  const [Bcertificate, setBcertificate] = useState(0);

  useEffect(() => {
    const SlidesC = () => {
      setBcertificate((prev) => (prev + 1) % images.length);
    };
    const intervalid = setInterval(SlidesC, 7000);
    return () => clearInterval(intervalid);
  }, []);

  return (
    <>
      <div className="main">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div className="parentc">
            <div class="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === Bcertificate ? 'active' : ''}`} >
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
