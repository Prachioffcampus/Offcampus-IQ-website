import Link from 'next/link'
import React from 'react'
import { FaBook } from "react-icons/fa"
import { FaBlogger } from "react-icons/fa"
function JavaScript() {
  return (
    <>
        {/* js programming section */}
        
         <div className='bg-[#71c0c03f] pt-2'>
              {/* js image section */}
                  <div className='flex items-center  lg:gap-8 lg:mx-[7rem] md:ml-[4rem] md:mt-[3rem] lg:pt-[3rem] p-5 gap-6'>
                      {/* HTML image section */}
                      <div className='h-[10vh] w-[30vw] sm:h-[10vh] sm:w-[12vw] md:h-[19vh] md:w-[20vw]
                              lg:h-[20vh] lg:w-[16vw] rounded-md bg-blue-700 flex items-center justify-center '>
                              <img src="/image7.png" />
                        
                      </div>

                      
                      <div className='flex flex-col gap-6 md:gap-4 '>

                          <h1 className='text-[24px] md:text-[2.1rem] lg:text-[2.5rem] font-bold  leading-tight text-[#242121]'>Learn HTML</h1>

                        {/* liks for large device */}
                        <div className='lg:flex md:gap-10 ml-2 text-[#4d4c4c] leading-tight uppercase hiddenborder-black'>
                              <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em] border-b-4 border-blue-300 rounded hover:text-blue-500 duration-100'>
                                      <FaBook />
                                      Docs
                              </Link>

                              <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em] hover:border-b-4 hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                    <FaBlogger />
                                    Interview
                              </Link>

                              <Link href={"#"} className='flex items-center gap-2 lg:text-[1.3em]  hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                    <FaBlogger />
                                    Challenge
                              </Link>


                              <Link href="#" className='flex items-center gap-2 lg:text-[1.3em] hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                      <FaBlogger />
                                      Blog
                              </Link>


                        </div>
                        {/*<div className='border-b-4 w-[100%] hidden sm:block  border-black'></div> */}
                      </div>

                  </div>

                  {/* links */}
                  <div className='flex gap-4 sm:gap-6 ml-5 md:ml-[5rem] lg:hidden  '>
                            {/* docs */}
                          <Link href={"#"} className='flex  items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem]
                                hover:text-blue-500 border-b-4  border-blue-300 rounded duration-100'>

                                  <FaBook />
                                  Docs

                          </Link>

                          {/* Refrences */}
                          <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem]
                                hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>
                                
                                <FaBlogger />
                                Refrenses

                          </Link>

                          {/* Challenge */}
                          <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem]
                                hover:border-b-4  hover:border-blue-300 roundedhover:text-blue-500 duration-100'>

                                <FaBlogger />
                                Challenge

                          </Link>

                          <Link href={"#"} className='flex items-center gap-2 sm:text-[14px] text-[0.8rem] md:text-[1.3rem]
                                  hover:border-b-4  hover:border-blue-300 rounded hover:text-blue-500 duration-100'>

                                  <FaBlogger />
                                  Blog

                          </Link>
                    
                  </div>
                  

                      {/* content  */}
                  <div className='flex flex-col gap-5 md:gap-7 pb-5 md:pb-[5rem] mx-5 mt-5 md:text-[19px] font-normal text-[#4d4c4c]'>
                        
                        <p className='lg:px-[7rem] md:px-[4rem] leading-7'>HTML (HyperText Markup Language) is a language used for creating webpages which is the fundamental building block of the Web.</p>

                        <p className='lg:px-[7rem] md:px-[4rem] leading-7'>One thing to remember about HTML is that it is a markup language with no programming constructs. Instead, the language provides us with a structure to build web pages.</p>

                        <p className='lg:px-[7rem] md:px-[4rem] leading-7'>Using HTML, we can define web page elements such as paragraphs, headings, links, and images. Our HTML tutorials will teach you everything you need to know about HTML5 (modern HTML) step-by-step.</p>

                  </div>
        </div>
    </>
  )
}

export default JavaScript