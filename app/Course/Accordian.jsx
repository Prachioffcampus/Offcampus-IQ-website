import React, { useState } from 'react'
import { FaCaretDown,FaCaretUp } from 'react-icons/fa'

function Accordian({question,answer}) {
    const [show,setShow]=useState(false)
  return (
    <div>
                <div className='flex gap-4 mb-2 items-center  transition ease-in-out delay-150'>
                <h3>{question}</h3>
                <p onClick={()=>setShow(!show)} className='cursor-pointer text-3xl '> {show ? <FaCaretDown/>:<FaCaretUp/>}</p>

                </div>
                {show && <p className=' transition ease-in-out delay-150'>{answer}</p>}
    </div>
  )
}

export default Accordian