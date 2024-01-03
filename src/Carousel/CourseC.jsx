import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import FSWDImage from '../Simages/FSWDC.jpeg';
import MLImage from '../Simages/MLC.jpeg';
import SQLImage from '../Simages/SQLC.jpeg';

const images = [
    FSWDImage,
    MLImage,
    SQLImage
];
export default function CourseC() {
    const [Ccertificate, setCcertificate] = useState(0);

    useEffect(() => {
        const Change = () => {
            setCcertificate((prev) => (prev + 1) % images.length);
        };
        const intervalid = setInterval(Change, 7000);
        return () => clearInterval(intervalid);
    }, []);

    return (
        <>
            <div className="main">


                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="parentc">
                        <div className="carousel-inner">
                            {images.map((image, index) => (
                                <div key={index} className={`carousel-item ${index === Ccertificate ? 'active' : ''}`}>
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
