import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './accordion/Accordion'

function App(){
  return <>
    <div className='bg-slate-300 shadow-sm shadow-slate-800 max-w-72 p-2'>
    <Accordion/>
    </div>
  </>
}

export default App
