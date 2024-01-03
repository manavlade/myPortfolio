import React from 'react'
import backend from './Simages/freepik.jpg';
import deeplearning from './Simages/deepl.jpg';
import AI from './Simages/AI.jpg';
import Portfolio from './Simages/Portfolio.png'
import { useEffect } from 'react';
export default function Projects() {
    const REF = React.useRef(null);
    useEffect (() => {
        const observed = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    REF.current.classList.add('visible');
                }
            },
            {
                threshold: 0.8,
            }
        );
        observed.observe(REF.current);
        return () => observed.disconnect();
    }, [])
    return (
        <>
            <div id='project' ref={REF} >
                <div className="phead">
                    <h1>PROJECTS</h1>
                </div>
                <div className="projects" >
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={AI} class="card-img-top" alt="..." />
                                <div class="card-body" style={{
                                    color: "yellow"
                                }}>
                                    <h5 class="card-title">Bharat Internship </h5>
                                    <p class="card-text">Created various AI models during my internship with Bharar interns <a href="https://github.com/manavlade/Bharat-Internship">Click here to view</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={Portfolio} class="card-img-top" alt="..." />
                                <div class="card-body" style={{
                                    color: "yellow"
                                }}>
                                    <h5 class="card-title">Portfolio Website</h5>
                                    <p class="card-text">I developed a portfolio website using React and implemented
                                        a range of technologies to enhance its functionality and aesthetics. Used  Typed.js for text animations
                                        React Router DOM for seamless page navigation</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={backend} class="card-img-top" alt="..." />
                                <div class="card-body" style={{
                                    color: "yellow"
                                }}>
                                    <h5 class="card-title">Restful Wwb Service </h5>
                                    <p class="card-text">
                                        Cretaed a CRUD application for employee management using java Spring Boot as a internship task
                                        for Hewlett Packard Enterprise. <a href='https://github.com/manavlade/HPE_Intern'>Click here to view code</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={deeplearning} id='deeplearning' class="card-img-top" alt="deep" />
                                <div class="card-body" style={{
                                    color: "yellow"
                                }}>
                                    <h5 class="card-title">Machine/Deep Learning Model</h5>
                                    <p class="card-text">
                                        Created a various Machine/Deep laearning model using numpy matplotlib.pyplot seaborn tensorflow and many more libraries used google colab
                                        as code editor <a href="https://colab.research.google.com/drive/13_HeCFXOb-Qk0yhlN51IhckMWMVfbzQi#scrollTo=FxMFBIDQ3ZTh">
                                            Click here to view
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
