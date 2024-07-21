import React, { useState } from 'react'
import { AddData } from './AddData'

export const Main = () => {
  const [value,setValue]=useState('')
  const [task,setTask]=useState([])
  const handleClick=()=>{
    setTask([...task,value])
    console.log(task)
    setValue('')
  }
  return (
    <div className='bg-violet-600 flex flex-col justify-center items-center p-10 text-gray-100 min-h-[100vh]'>
    <div className='border-2 rounded-xl shadow-xl shadow-black p-10 w-[90%] md:w-[50%] bg-transparent backdrop-blur-md'>
        <h2 className='text-3xl text-center font-semibold'>TODO LIST</h2>
        <div>
            
            <input type="text" placeholder='Add Task' value={value} className='border text-black border-black rounded text-center h-12 w-[60%] md:w-[80%] m-4 outline-none' onChange={(e)=>setValue(e.target.value)} 
            onKeyDown={(e)=>{
                if(e.key=='Enter'){
                    handleClick()
                }
            }}/>
            <button className='bg-black text-white p-3 rounded-sm' onClick={handleClick}>ADD</button>
        </div>
        <AddData name={task}/>
    </div>
    </div>
  )
}
