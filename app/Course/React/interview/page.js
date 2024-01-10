"use client"
import React, { useState } from 'react'
import ReactHeaderSection from '../reactHeaderSection'
import { FaStore,FaDatabase ,FaPython} from "react-icons/fa"
import { SiThealgorithms } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb"
import Accordian from '../../Accordian';

function Interview() {
  const [show ,setShow]=useState(false)
  const filterHeader=[
    {
      icon: <FaStore/>,
      title:"All Topic"
    },
    {
      icon: <FaDatabase/>,
      title:"Database"
    },
    {
      icon: <SiThealgorithms/>,
      title:"Algorithm"
    },
    {
      icon:  <TbBrandJavascript/>,
      title:"JavaScript"
    },
    {
      icon:  <FaPython/> ,
      title:"Python"
    },
    {
      icon:  <TbBrandJavascript/>,
      title:"JavaScript"
    },
    {
      icon:  <FaPython/> ,
      title:"Python"
    },
    {
      icon:  <TbBrandJavascript/>,
      title:"JavaScript"
    },
    {
      icon:  <FaPython/> ,
      title:"Python"
    },
  ]

  const data=[
    {
      question:"Difference b/w let and const",
      solution:"Let is reassign but const is not reassign",
      level:"Difficlty"

    },
    {
      question:"Difference b/w let and const",
      solution:"Let is reassign but const is not reassign",
      level:"Difficlty"

    },
    {
      question:"Difference b/w let and const",
      solution:"Let is reassign but const is not reassign",
      level:"Simple"

    },
    {
      question:"Difference b/w let and const",
      solution:"Let is reassign but const is not reassign",
      level:"Difficlty"

    },
    {
      question:"Difference b/w let and const",
      solution:"Let is reassign but const is not reassign",
      level:"Difficlty"

    },
  ]

  return (
    <div>
        <ReactHeaderSection/>
        {/* Header Section */}
        <div className='md:mx-[7rem] mx-2 pl-4 flex gap-3 mt-4 overflow-x-auto overflow-y-hidden scroll box-border'>

          {
            filterHeader.map((item,index)=>(
              <div key={index} className='cursor-pointer flex whitespace-nowrap py-2 items-center gap-2 bg-gray-300   px-6  rounded-full '>
                  {item.icon} <p>{item.title}</p>
              </div>

            ))
          }
        
        </div>
          {/* table */}
          <div className="px-4 sm:px-6 lg:p-4 md:mx-[7rem]">
          <div className="sm:flex sm:items-center ">
           
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Answer
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Difficultiy
                      </th>
                     
                      
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.map((questions,index) => (
                      <tr key={questions.id} className="even:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {index+1} . {questions.question}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                             
                          <Accordian question={questions.question} answer={questions.solution}/>
                         
                        </td>

                        <td>{questions.level}</td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

          {/* table*/}

    </div>
  )
}

export default Interview