"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Docs() {
   
  return (
    <>
    {/* relative -top-10 */}
        <div className='flex    '>
             
                  {/* border */}
                  <div className='lg:w-[70%] w-full flex flex-col items-center mx-12 lg:m-0 justify-center '>
                                <div className='  my-5 mr-6 sm:w-2/2 lg:w-[80%] w-full  '>
                                        <div className='px-[14px] py-[8px] text-3xl font-bold'>Getting Started With JavaScript</div>
                                        {/* border bottom */}
                                              <div className='border-b'></div>
                                              <div className='flex flex-col gap-7 mt-5 text-[19px] font-normal ml-4'>
                                                        {/* Body content */}
                                                <p>JavaScript is a popular programming language that has a wide range of applications.</p>

                                                <p>JavaScript was previously used mainly for making webpages interactive such as form validation, animation, etc. Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on.</p>
                                
                                                <p>Because of its wide range of applications, you can run JavaScript in several ways:</p>

                                                <ul className='ml-7 flex flex-col gap-3'>
                                                    <li className='list-disc'>Using console tab of web browsers</li>
                                                    <li className='list-disc'>Using Node.js</li>
                                                    <li className='list-disc'>By creating web pages</li>
                                                </ul>
                                              </div>
                                </div>


                {/* controls flow */}
                <div className='border-2 rounded-md  my-5 mr-5 lg:w-[80%] sm:w-3/2 w-full mt-[36vh] '>
                    <div className='px-[24px] py-[16px] text-xl font-semibold'>Flow Controls</div>
                    {/* border bottom */}
                        <div className='border-b-2'></div>
                                {/* Body content */}
                                <div className='text-[14px]'>
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
                {/* */}

                 {/* Fuunction */}
                 <div className='border-2 rounded-md  my-5 mr-5 lg:w-[80%] sm:w-3/2 w-full  '>
                            <div className='px-[24px] py-[16px] text-xl font-semibold' id='function'>Function</div>
                  {/* border bottom */}
                            <div className='border-b-2'></div>
                            {/* Body content */}
                            <div className='text-[14px]'>
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
                 {/* */}
                 
          </div>
        
        </div>
    </>
  )
}

export default Docs