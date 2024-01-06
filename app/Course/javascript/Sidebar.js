"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Sidebar() {
   
    const router=useRouter()
    return (
        <div className='  pl-4 w-[65%] my-5 {/*border*/}  ml-[7rem]   hidden lg:block'>
            {/* header */}
            <div className='border-2  rounded-sm '>


                {/* */}
                <div className="join join-vertical w-full">
                
                    <div className="collapse collapse-arrow  transition-all duration-100   border-base-300 ">  
                        <input type="radio" name="my-accordion-4 "  />
                        <div className="collapse-title text-xl font-medium px-4 flex gap-20 items-center  " >
                            Start with JavaScript   
                        </div>
                       
                        <div className="collapse-content">
                        <div className='py-2 px-5 hover:bg-red-300' onClick={()=>router.push('/Course/javascript/gets_start')}>Getting Start with JavaScript</div>
                        <div className='py-2 px-5 hover:bg-red-300' onClick={()=>router.push('Variable')}>JavaScript Variavle and constant</div>
                        <div className='py-2 px-5 hover:bg-red-300' onClick={()=>router.push('data_type')}  >JavaScript Datatype</div>
                        <div className='py-2 px-5 hover:bg-red-300'>
                        <Link href={{pathname:"console",query:"JavaScript console Statement"}}>JavaScript console Statement</Link></div>
                        <div className='py-2 px-5 hover:bg-red-300'>JavaScript Comment</div>
                        <div className='py-2 px-5 hover:bg-red-300'>JavaScript takes input</div>
                        <div className='py-2 px-5 hover:bg-red-300'>JavaScript Operators</div>
                        <div className='py-2 px-5 hover:bg-red-300'>JavaScript type conversion</div>
                    </div>
                       
                    </div>
                    {/* bottom border */}


                    <div className='border-b '></div>
                    <div className="collapse collapse-arrow   border-base-300 ">
                        <input type="radio" name="my-accordion-4 " />
                        <div className="collapse-title text-xl font-medium px-4 " >
                            JS Controls Flow
                        </div>
                        <div className="collapse-content">
                            <div className='py-2 px-5 hover:bg-red-300'>Getting Start with JavaScript</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Variavle and constant</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Datatype</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript console Statement</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Comment</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript takes input</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Operators</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript type conversion</div>
                        </div>
                    </div>
                    {/* bottom border */}
                    <div className='border-b '></div>
                    <div className="collapse collapse-arrow   border-base-300 ">
                        <input type="radio" name="my-accordion-4 " />
                        <div className="collapse-title text-xl font-medium px-4 " >
                            Function
                        </div>
                        <div className="collapse-content">
                            <div className='py-2 px-5 hover:bg-red-300'>Getting Start with JavaScript</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Variavle and constant</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Datatype</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript console Statement</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Comment</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript takes input</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Operators</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript type conversion</div>
                        </div>
                    </div>
                    {/* bottom border */}
                    <div className='border-b '></div>


                    <div className="collapse collapse-arrow    ">
                        <input type="radio" name="my-accordion-4 " />
                        <div className="collapse-title text-xl font-medium px-4 " >
                            JS Object
                        </div>
                        <div className="collapse-content">

                            <div className='py-2 px-5 hover:bg-red-300'>Getting Start with JavaScript</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Variavle and constant</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Datatype</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript console Statement</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Comment</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript takes input</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript Operators</div>
                            <div className='py-2 px-5 hover:bg-red-300'>JavaScript type conversion</div>

                        </div>
                    </div>


                </div>
                {/* */}


            </div>
        </div>
    )
}

export default Sidebar