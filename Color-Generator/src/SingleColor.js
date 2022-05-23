import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',');
  useEffect(() => {
    let timer = setTimeout(() => setAlert(false), 3000);
    return () => clearTimeout(timer);
  },[alert]);
  return (
    <article onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText('#' + hexColor);
    }} className={`color ${index > 10 ? 'color-light' : ''}`} style={{backgroundColor : `rgb(${bcg})`}} >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
      {alert && <p className='alert'>Copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
