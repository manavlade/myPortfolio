import React from 'react'
import htmlImage from './Simages/html1.jpg';
import cssImage from './Simages/css.png';
import jsImage from './Simages/js.png';
import reactImage from './Simages/react.png';
import nodeImage from './Simages/node.png';
import mongoDBImage from './Simages/mongodb.png';
import javaImage from './Simages/java.png';
import pythonImage from './Simages/python.png';
import sqlImage from './Simages/sql.png';
import angularImage from './Simages/angular.png';
import expressImage from './Simages/expr.png';
import devopaImage from './Simages/download.png';
import dockerImage from './Simages/docker.png';
import NextImage from './Simages/Nextjs.jpeg';
import vsImage from './Simages/vs.png';
import bootImage from './Simages/bootstrap.png';
import FirebaseImg from './Simages/firebase.png'

import { useEffect } from 'react';

export default function Skills() {
  const SkillREF = React.useRef(null);

  useEffect (() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          SkillREF.current.classList.add('visible');  
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(SkillREF.current);
    return () => observer.disconnect();
  }, [])


  return (
    <>
      <div id='skill'  >
        <div className="shead">
          <h1>SKILLS</h1>
        </div>

        <div className="skills" ref={SkillREF}  >
          <div className="fimg">
            <div className="html">
              <img src={htmlImage} alt="HTML" />
            
            </div>
            <div className="css">
              <img src={cssImage} alt="CSS" />
             
            </div>
            <div className="js">
              <img src={jsImage} alt="javascript" />
           
            </div>
            <div className="boot">
              <img src={bootImage} alt="devops" />
           
            </div>
          </div>
          <div className="bimg">
            <div className="rc">
              <img src={reactImage} alt="react" />
       
            </div>
            <div className="angular">
              <img src={angularImage} alt="angular" />
              
            </div>


            <div className="nd">
              <img src={nodeImage} alt="node" />
             
            </div>
            <div className="express">
              <img src={expressImage} alt="express" />
              
            </div>



          </div>
          <div className="dimg">
            <div className="angular">
              <img src={mongoDBImage} alt="mongo" />
              
            </div>

            <div className="devo">
              <img src={FirebaseImg} alt="devops" />
              
            </div>
            <div className="dock">
              <img src={NextImage} alt="kubernatives" />
             
            </div>
            <div className="kuber">
            
              <img src={dockerImage} alt="docker" />
             
            </div>

          </div>
          <div className="pimg">
            <div className="java">
              <img src={javaImage} alt="java" />
            </div>
            <div className="python">
              <img src={pythonImage} alt="python" />
            </div>
            <div className="sql">
              <img src={sqlImage} alt="sql" />
            </div>
            <div className="vs">
              <img src={vsImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
