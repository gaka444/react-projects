import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#222').all(10));

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(err){
      setError(true);
      console.log(err);
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input className={error ? 'error' : null} type="text" value={color} onChange={(e) => setColor(e.target.value)} />  
          <button type="submit" className='btn'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
