import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Certificates() {
  return (
    <>
      <div id='certificate'>
        <h1 className='cert-h'  >Certificates</h1>
        <div className='cert-types'>
          <ul className='cerrti' >
            <li className='Cert-routes' >
              <Link to="/" style={{ color: 'yellow' }} > All</Link>
            </li>
            <li className='Cert-routes'>
              <Link to="/course" style={{ color: 'yellow' }}> Course</Link>
            </li>
            <li className='Cert-routes'>
              <Link to="/internship" style={{ color: 'yellow' }}> Internship</Link>
            </li>
            <li className='Cert-routes'>
              <Link to="/bootcamp" style={{ color: 'yellow' }}> Bootcamp</Link>
            </li>
            <li className='Cert-routes'>
              <Link to="/other" style={{ color: 'yellow' }}> Other</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

