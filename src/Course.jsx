import React from 'react'
import FSWDImage from './Simages/FSWDC.jpeg';
import MLImage from './Simages/MLC.jpeg';
import SQLImage from './Simages/SQLC.jpeg';

export default function Course() {
    return (
        <>

            <h3 className='fsh'>Course Completion Certificate</h3>
            <div className="cource">
                <div className="fswdc">
                    <img src={FSWDImage} alt="FSWDImage" srcset="" />;
                </div>
                <div className="mlc">
                    <img src={MLImage} alt="MLImage" srcset="" />
                </div>
                <div className="sqlc">
                    <img src={SQLImage} alt="SQLImage" srcset="" />
                </div>

            </div>
        </>
    )
}
