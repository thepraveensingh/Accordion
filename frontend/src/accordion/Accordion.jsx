import React, { useState } from 'react'
import { question } from './api';
import MyAccordion from './MyAccordion';
const Accordion = () => {
    const [data,setData] = useState(question);
  return (
    <>
      <h1 className="text-3xl font-extrabold">React interview questions</h1>
      {data.map((element,index)=>{
        return <MyAccordion key = {index} {...element}/>
      })}
    </>
  )
}

export default Accordion;
