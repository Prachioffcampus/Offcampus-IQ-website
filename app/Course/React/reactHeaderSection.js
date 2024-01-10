"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBook } from "react-icons/fa"
import { FaBlogger } from "react-icons/fa"

function ReactHeaderSection() {
      const pathname=usePathname()
      const links=[
            {
                  link:"/Course/React",name:"Docs",icon:<FaBook/>
            },
            {
                  link:"/Course/React/interview",name:"Interview",icon:<FaBook/>
            },
            {
                  link:"/Course/React/challenges",name:"Challenges",icon:<FaBook/>
            },
            {
                  link:"/Course/React/blog",name:"Blog",icon:<FaBook/>
            },
      ]
  return (
    <>
        {/* js programming section */}
         <div className='bg-[#71c0c03f] pt-2'>
              {/* js image section */}
                  <div className='flex items-center  lg:gap-8 lg:mx-[7rem] md:ml-[4rem] md:mt-[3rem] lg:pt-[3rem] p-5 gap-6'>
                      {/* HTML image section */}
                      <div className='h-[10vh] w-[30vw] sm:h-[10vh] sm:w-[12vw] md:h-[19vh] md:w-[20vw]
                              lg:h-[15vh] lg:w-[24vw] xl:h-[20vh] xl:w-[16vw] rounded-md bg-blue-700 flex items-center justify-center '>
                              <img src="/image7.png" />
                        
                      </div>

                      
                      <div className='flex flex-col gap-6 md:gap-4 '>

                          <h1 className='text-[24px] md:text-[2.1rem] lg:text-[2.5rem] font-bold  leading-tight text-[#242121]'>Learn HTML</h1>

                        {/* liks for large device */}                       
                       <div className='lg:flex lg:gap-10 ml-2 border-b text-[#4d4c4c] leading-tight uppercase hidden border-black'>

                              {
                                    links.map((linkitem)=>{
                                          
                                         return(
                                           <>
                                          <Link href={linkitem.link} className={`flex items-center gap-2 lg:text-[1.3em]  rounded hover:text-blue-500 duration-100 ${pathname===linkitem.link?"border-b-4 border-blue-300":""}`}>
                                          {linkitem.icon}
                                          {linkitem.name}
                                          </Link>
                                          </>
                                          )
                                    })
                              }
                        </div>
                        
                      </div>

                  </div>

                  {/* links */}
                  <div className='flex gap-4 sm:gap-6 ml-5 border-b md:ml-[5rem] lg:hidden  '>
                            {/* docs */}
                          
                          

                          {
                              links.map((linkitem)=>{
                                    
                                   return(
                                     <>
                                    <Link href={linkitem.link} className={`flex items-center gap-2 sm:text-[14px] rounded text-[0.8rem] md:text-[1.3rem] ${pathname===linkitem.link?"border-b-4 border-blue-300":""}`}>
                                    {linkitem.icon}
                                    {linkitem.name}
                                    </Link>
                                    </>
                                    )
                              })
                        }

                  
                    
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

export default ReactHeaderSection