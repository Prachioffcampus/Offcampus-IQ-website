"use client"
import Link from 'next/link'


import React, { useState } from 'react'

function page({ params }) {
  console.log(params)

  return (
    <>
      {/* relative -top-10 */}
      <div className='flex    '>

        {/* border */}
        <div className='lg:w-[70%] w-full flex flex-col items-center mx-12 lg:m-0 justify-center '>
          <div className='  my-5 mr-6 sm:w-2/2 lg:w-[80%] w-full  '>
            <div className='px-[14px] py-[8px] text-3xl font-bold'></div>
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

          {/* */}


          {/* */}

        </div>


      </div>
    </>
  )
}

export default page