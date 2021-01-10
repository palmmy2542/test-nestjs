import React, { useState, useEffect } from 'react';
import {Course} from './interfaces'


import './App.css';

import CourseItem from './CourseItem';



const App = () => {
  const [courses, setCourse] = useState<any[]>([])
  console.log(courses)
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        setCourse(courses)
      })
  }, [])
  return (
    <div className="App">
      <ul>
        {courses.map(item=>(

          <CourseItem key={item.id} course={item}/>
        ))}
      </ul>
    </div>
  );
}

export default App;


