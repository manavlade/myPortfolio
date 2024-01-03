import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fscc from '../Simages/FSWDC.jpeg';
import MLAmage from '../Simages/MLC.jpeg';
import SQLAmage from '../Simages/SQLC.jpeg';
import FSWDALImage from '../Simages/FSWDI (1).jpeg';
import MLIALmage from '../Simages/MLI.jpeg';
import HPIAImage from '../Simages/HPEI.jpeg';
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
import LORImage from '../Cimages/LOR.jpeg';
import TCImage from '../Cimages/TC.jpeg';
import UpgradImage from '../Cimages/upgrad.jpeg'
import SYNCImage from '../Cimages/CERTI_SYNC.jpg';
import LOR_SYNC from '../Cimages/LOR_SYNC.jpeg';
import BharatImage from '../Cimages/BHARAT_CERTI.jpeg'
const images = [
    fscc,
    MLAmage,
    SQLAmage,
    FSWDALImage,
    MLIALmage,
    HPIAImage,
    SYNCImage,
    BharatImage,
    LORImage,
    LOR_SYNC,
    TCImage,
    UpgradImage,
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

export default function AllC() {
    const [certificate, setCertificate] = useState(0);

    useEffect(() => {
        const ChangeSlides = () => {
            setCertificate((prevIndex) => (prevIndex + 1) % images.length);
        };
        const interValid = setInterval(ChangeSlides, 7000);
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
