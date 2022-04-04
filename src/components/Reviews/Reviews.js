import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [person, setPerson] = useState([]);

  useEffect( () =>{
    fetch('person.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div>
      <h1>This is Review</h1>
    </div>
  );
};

export default Reviews;