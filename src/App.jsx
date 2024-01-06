import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Course from './Course'
import Certificates from './Certificates'
import { Route, Routes } from 'react-router-dom'
import Foter from './Foter'
import Connect from './Connect'
import AllC from './Carousel/AllC'
import Bootcampc from './Carousel/Bootcampc'
import CourseC from './Carousel/CourseC';
import Internshipc from './Carousel/Internshipc';
import Otherc from './Carousel/Otherc'
import Experience from './Experience'

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Home />
      </div>
      <div className="bgr">
        <About />
        <Skills /> 
        <Projects />
        <Certificates />
        <Routes>
          <Route path='/' element={<AllC />} />
          <Route path='/course' element={<CourseC />} />
          <Route path='/internship' element={<Internshipc />} />
          <Route path='/bootcamp' element={<Bootcampc />} />
          <Route path='/other' element={<Otherc />} />
        </Routes>
        <Connect />
        <Foter />  
      </div>  
    </>
  )
}

export default App
