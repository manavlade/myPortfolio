import React from 'react';
import { useState, useEffect } from 'react';

export default function About() {
  const containerRef = React.useRef(null);
  useEffect (() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting){
          containerRef.current.classList.add('visible');
        }
      },
      {
        threshold: 1.0, 
      }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();

  }, [])
  return (
    <>
      <div className="container" id='about' ref={containerRef} >
        <h1 className='head'>Introducing Myself</h1>

        <p className='para' id='color-mix' style={{
          color: "yellow"
        }} >
          Hi there! My name is Manav Lade and I'm a full-stack web developer and a third-year computer engineering student. 
          I have a passion for building and designing websites that are both functional and visually appealing. 
          I am skilled in HTML, CSS, and JavaScript, and have experience working with React.js and Next.js. In addition to my front-end skills, 
          I am also proficient in back-end technologies such as Node.js,SQL,Firebase and MongoDB.
           My knowledge of data structures and algorithms, which I primarily use Java for, allows me to write efficient and scalable code.
            I also have experience using Python for machine learning projects. 
          When I'm not coding, you can find me exploring new technologies and staying up-to-date with the latest trends in web development.
        </p>
      </div>
    </>
  );
}
