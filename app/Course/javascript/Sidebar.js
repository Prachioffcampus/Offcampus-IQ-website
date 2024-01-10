"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SidebarData from './SidebarData'

function Sidebar() {
   
    const router=useRouter()
    const sidebarData=[
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
      {
        title:"Start with JavaScript",
      },
    ]
    
    return (
        <div className='  pl-4 w-[65%] my-5 {/*border*/}  ml-[7rem]   hidden lg:block'>
            {/* header */}
            <div className='border-2 my-5 rounded-sm '>


                {/* */}
                    <div>
                    { sidebarData.map((data)=>{

                      return <SidebarData title={data.title} />
                    })

                    }
                    </div>
                    


                       
            </div>
                {/* */}


        </div>
    )
}

export default Sidebar