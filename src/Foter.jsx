import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


export default function Foter() {
    const TechStack = [
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'React',
        'Font Awesome',
        'Vite',
        'Freepik'
    ];
    return (
        <>
            <div className="main-foot" id='Footer'>
                <div className="foot-about">
                    <h2>About Me</h2>
                    <div className="flex">
                        <p className='foot-p'>Hi there! My name is Manav Lade and I'm a full-stack web developer, Freelancer and Pursuing Computer
                            Engineering currently in Third Year My skills include proficiency in HTML, CSS, JavaScript, and Python,
                            as well as experience with various frameworks such as React and Angular.
                            I am passionate about developing clean, elegant code and creating engaging, user-friendly web applications.
                        </p>
                    </div>
                </div>
                <div className="bMenu">
                    <ul className='bMList'>
                        <a className="nav-link active" href="#navbar" >Home</a>
                        <a className="nav-link active" aria-current="page" href="#about" >About Me</a>
                        <a className="nav-link active" aria-current="page" href="#skill">Skills</a>
                        <a className="nav-link active" aria-current="page" href="#project" >Projects</a>
                        <a className="nav-link active" aria-current="page" href="#certificate">Certificates</a>
                    </ul>
                </div>
                <div className="footer">
                <ul>
                        <div className="linked" >
                            <a href="https://www.linkedin.com/in/manav-lade-96331a235/">
                                <FontAwesomeIcon className='gmail' icon={faLinkedin} beatFade />
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/manavlade">
                                <FontAwesomeIcon className='gmail' icon={faGithub} beatFade />
                            </a>
                        </div>
                        <div className="insta">
                            <a href="https://www.instagram.com/manavlade10/">
                                <FontAwesomeIcon className='gmail' icon={faInstagram} beatFade />
                            </a>
                        </div>
                        <div className="gmaild">
                            <a href="mailto: manavlade14690@gmail.com ">
                                <FontAwesomeIcon className='gmail' icon={faEnvelope} beatFade />
                            </a>
                        </div>

                </ul>
                </div>
            </div>
                <div className="site-credits" style={{
                    color: "white",
                    backgroundColor: "black"
                }}>
                    <p>Site Credits: This Website was built using {TechStack.join(', ')}. </p>
                </div>
        </>
    )
}
