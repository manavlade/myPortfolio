import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black well" id='navbar'>
        <div className="container-fluid">
          <FontAwesomeIcon icon={faBars} bounce style={{
            color: "white"
          }} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="site-title" style={{
            marginRight: "50px"
          }} >
            Manav's Webfolio
          </div>  
          <div className="collapse navbar-collapse"   id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{
               fontSize: "large", paddingLeft: "50px"
            }} >
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#Home" style={{
                  color: "white",
                  fontSize: '22px'
                }} >Home</a>
              </li>
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#about" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >About Me</a>
              </li>
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#skill" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >Skills</a>
              </li>
              <li className="nav-item" style={{
                fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#experience" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >Experience </a>
              </li>
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#project" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >Projects</a>
              </li>
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#certificate" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >Certificates</a>
              </li>
              <li className="nav-item" style={{
                 fontSize: "large"
              }}  >
                <a className="nav-link active" aria-current="page" href="#Footer" style={{
                  color: "white",
                  fontSize: '22px'
                }}  >Let's Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

