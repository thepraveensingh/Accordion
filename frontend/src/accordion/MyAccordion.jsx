import React, { useState } from 'react'
import { question } from './api'
const MyAccordion = ({ question,answer}) => {
  // let { question,answer} = props;
  const [show,setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show);
  }
  return (
    <>
    <div className="bg-zinc-200 m-2 flex text-left justify-between px-1">
      <h1 className='text-xl font-semibold'>{question}</h1>
      <button onClick={handleClick}>
        {show ? '➖' : '➕'}
      </button>
    </div>
    {show && <p className='overflow-y-auto text-left px-2 '>{answer}</p> }
    
    </>
  )
}

export default MyAccordion
