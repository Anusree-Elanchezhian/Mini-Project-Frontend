import React from 'react';
import NavBar from '../navbar/NavBar';
import './Courses.css'
const Courses=()=>{
    return(
        <div style={{display:'flex'}}>
            <NavBar/>
        <div className="courses-container">
        <div className='crs-head'>
                <h3>COURSES</h3>
            </div>
            <div className='search'>

            </div>
            <div className='part1'>
            <div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>Java Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Callbacks &amp; Closures</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  <div className="course" id={1}>
    <div className="course-preview">
      <h6>Course</h6>
      <h2>Advanced Java </h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Callbacks &amp; Closures</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  </div>
  <div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>JavaScript Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Callbacks &amp; Closures</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  <div className="course" id={1}>
     <div className="course-preview">
      <h6>Course</h6>
      <h2>Java Fundamentals</h2>
      <a href="#">
        View details
        <i className="fas fa-chevron-right" />
      </a>
    </div>
    <div className="course-info">
      <h6>Chapter 4</h6>
      <h2>Callbacks &amp; Closures</h2>
      <button className="btn">Start</button>
    </div>
  </div>
  </div>
  </div>
        </div>
        </div>
    )
};
export  default Courses;