"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCaretDown,FaCaretUp } from 'react-icons/fa'
function SidebarData({title}) {
    const [show,setShow]=useState(false)
  return (
    <div>
    <div className='flex items-center py-3' onClick={()=>setShow(!show)}>
            <h1 className='text-xl font-medium px-4 flex gap-20 items-center  cursor-pointer  '>{title} </h1>
            <p className=' cursor-pointer '>{show ? <FaCaretDown/> :<FaCaretUp/>}</p>
    </div>
            {
                show && 
                <div>
                    <div className='py-2 px-5 hover:bg-red-300' >
                            <Link href="/Course/javascript/gets_start">Getting Start with JavaScript</Link>
                    </div>
                    <div className='py-2 px-5 hover:bg-red-300'>
                            <Link href="/Course/javascript/variable_constant">
                            JavaScript Variavle and constant
                            </Link>
                    
                    </div>
                    <div className='py-2 px-5 hover:bg-red-300'   >
                            <Link href="/Course/javascript/data_type">JavaScript Datatype</Link>
                    
                    </div>
                    <div className='py-2 px-5 hover:bg-red-300'   >
                            <Link href="/Course/javascript/data_type">JavaScript Datatype</Link>
                    
                    </div>
                    <div className='py-2 px-5 hover:bg-red-300'   >
                            <Link href="/Course/javascript/data_type">JavaScript Datatype</Link>
                    
                    </div>
                    <div className='py-2 px-5 hover:bg-red-300'   >
                            <Link href="/Course/javascript/data_type">JavaScript Datatype</Link>
                    
                    </div>
                </div>
            }
            <div className='border-b '></div> 

    </div>

   
  )
}

export default SidebarData