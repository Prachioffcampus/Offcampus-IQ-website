
import React from 'react'
import Sidebar from './Sidebar';
function  JavaScriptLayout({children}) {
  return (
    <div className='flex'> 

    <Sidebar/>
    {children}
    </div>
  )
}

export default  JavaScriptLayout