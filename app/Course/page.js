import Link from 'next/link'
import React from 'react'
import { FaBook } from "react-icons/fa"
import { FaBlogger } from "react-icons/fa"
import Docs from '../React/Docs'


function JavaScript() {
  return (
    <>
      {/* js programming section */}
        <div className=' pt-2  '>
          {/* js image section */}
              <div className='flex items-center  lg:gap-8 lg:mx-[7rem] md:ml-[4rem] md:mt-[3rem] lg:pt-[3rem] p-5 gap-6'>
                  <div className='h-[10vh] w-[30vw] sm:h-[10vh] sm:w-[12vw] md:h-[19vh] md:w-[20vw] lg:h-[20vh] lg:w-[16vw]
                            rounded-md bg-blue-700 flex items-center justify-center '>
                            {/*<img src="/image5.png" />*/}
                            <h2 className='text-[40px] text-white  sm:text-[4rem]'>JS</h2>
                  </div>

                  <div className='flex flex-col gap-6 md:gap-4 '>
                          <h1 className='text-[24px] md:text-[2.1rem] lg:text-[2.5rem] font-bold  leading-tight text-[#242121]'>Learn JavaScript Programming</h1>

                        {/* link section */}
                          <div className='lg:flex md:gap-10 ml-2 
                          text-[#4d4c4c] leading-tight uppercase  hidden   border-black'>
                                <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em] border-b-4 border-blue-300 rounded hover:text-blue-500 duration-100'>
                                          <FaBook />
                                          Docs
                                </Link>

                                <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em] hover:border-b-4 hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                          <FaBlogger />
                                          Interview
                                </Link>

                                <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em]  hover:border-b-4  hover:border-blue-300 roundedhover:text-blue-500 duration-100'>
                                          <FaBlogger />
                                          Challenge
                                </Link>
                                <Link href="#" className='flex items-center gap-2 lg:text-[1.3em] hover:border-b-4  hover:border-blue-300 roundedhover:text-blue-500 duration-100'>
                                          <FaBlogger />
                                          Blog
                                </Link>


                          </div>
                        {/*<div className='border-b-4 w-[100%] hidden sm:block  border-black'></div> */}
                  </div>

              </div>

              {/* docs */}
              <div className='flex gap-4 sm:gap-6 ml-5 md:ml-[5rem] lg:hidden  '>
                        <Link href={"#"} className='flex  items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem] hover:text-blue-500 border-b-4  border-blue-300 rounded duration-100'>
                                  <FaBook />
                                  Docs
                        </Link>

                        <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem] hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                  <FaBlogger />
                                  Refrenses
                        </Link>

                        <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem] hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'> 
                                  <FaBlogger />
                                  Challenge
                        </Link>

                        <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem] hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                    <FaBlogger />
                                    Blog
                        </Link>
                
              </div>
              {/*  <div className='h-1 w-[80%] mx-5 rounded sm:hidden  bg-black'></div>


              {/* content  */}
              <div className='flex flex-col gap-5 md:gap-7 pb-5 md:pb-[5rem] mx-5 mt-5 md:text-[19px] font-normal text-[#4d4c4c]'>
                    <p className='lg:px-[7rem] md:px-[4rem] leading-7'>
                      JavaScript is a powerful and flexible programming language. It can execute
                      on a web browser that allows us to make interactive webpages such as popup menus,
                      animations, form validation, etc.</p>
                    <p className='lg:px-[7rem] md:px-[4rem] leading-7'>
                      JavaScript has evolved a lot in the past decade.
                      Our JavaScript tutorials will help you understand the core concepts of modern JavaScript,
                      one step at a time.</p>
              </div>
              
              </div>
              <Docs/>
    </>
  )
}

export default JavaScript