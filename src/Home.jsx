import React from 'react'
import './Styles.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import bgimage from './Simages/cbgrgif.gif'
import { Link } from 'react-router-dom'
import myresume from './Cimages/Manav Lade.pdf';

export default function Home() {
    const date = new Date();
    const Hour = date.getHours()
    let greetings;

    if (Hour >= 4 && Hour < 12) {
        greetings = 'Good Morning';
    }
    else if (Hour >= 12 && Hour < 16) {
        greetings = 'Good Afternoon'
    }
    else if (Hour >= 16 || Hour < 5) {
        greetings = 'Good Evening';
    }
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                'I am a Full Stack Web Developer',
                'I am a Salesforce Developer(Learning)',
                'I am a Machine Learning Enthusiast!'
            ],
            typeSpeed: 60,
            backSpeed: 20,
            loop: true,
        };
        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
       <div className="home" id='Home'>
       
                <img className='gif' src={bgimage} alt='GIF' />
            <div className="container"  id='typed'> 
                <div className="colo">
                    <h1> Hello {greetings}! </h1>
                        <h2>I'm MANAV LADE</h2>
                </div>
                <div className="st">
                <span ref={typedRef} />
                </div>
                    <a href={myresume}  download={"Manav lade.pdf"}>
                    <button type="button" className="btn btn-outline-success btn-lg">Download My Resume</button>
                </a>
            </div>
            </div>
          
        </>
    )
}
