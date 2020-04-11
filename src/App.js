import React, { useState } from 'react';// useState is a hook imported from react...A hook allows you to hook into a react feature
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount]= useState(0)// Variable is count..setCount changes variable
  let [likes, setLike]= useState('Likes')
  function handleCount () {
    setCount(count + 1)
    setLike(likes)
    if (count === 0){
      setLike('Like')
    }
    else if (count === 1){
        setLike('Likes')
    }
  console.log(likes)
  }
  
  return (
    <div className='myButton'>
            <button onClick={handleCount}>{count} {likes}</button>
    </div>
    
  );
}

export default App;


