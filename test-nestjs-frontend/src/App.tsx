import React, { useState, useEffect } from 'react';

import './App.css';



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
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


