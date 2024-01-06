import Link from 'next/link'
import React from 'react'

function Docs() {
  return (
    <>
    {/* relative -top-10 */}
        <div className='flex    '>
              <div className='  pl-4 w-[30%] my-5 {/*border*/}  ml-[7rem]   hidden lg:block'>
              {/* header */}
                          <div className='border-2  rounded-sm '>
                               <div className='py-2 px-5 leading-5 text-xl font-semibold'>Page Index</div>
                                    {/* bottom border */}
                                    <div className='border-b '></div>
                                    {/* header content */}
                                        <div className='md:text-[14px] '>
                                                <div className='py-2 px-5 leading-none hover:bg-blue-200'>Introduction</div>
                                                <div className='py-2 px-5 leading-none hover:bg-blue-200'>Flow Control</div>
                                                <div className='py-2 px-5 leading-5'>
                                                <Link href={"#function"}>JavaScript function</Link>
                                                </div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Objects</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Types</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Exception and module</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript ES6</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Asynchronus</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Miscellaneous</div>
                                                <div className='py-2 px-5 leading-5'>About JavaScript</div>
                                                <div className='py-2 px-5 leading-5'>Why Learn JavaScript</div>
                                                <div className='py-2 px-5 leading-5'>How to Learn JavaScript</div>
                                                <div className='py-2 px-5 leading-5'>JavaScript Resourse</div>
                                        </div>

                          </div>
                </div>
                  {/* border */}
                  <div className='lg:w-[70%] w-full flex flex-col items-center mx-12 lg:m-0 justify-center '>
                                <div className='border-2 rounded-md  my-5 mr-6 sm:w-2/2 lg:w-[80%] w-full  '>
                                        <div className='px-[14px] py-[8px] text-xl font-semibold'>JavaScript Inroduction</div>
                                        {/* border bottom */}
                                              <div className='border-b'></div>
                                                        {/* Body content */}
                                                      <div className='md:text-[15px] sm:text-[13px] text-[10px]'>
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