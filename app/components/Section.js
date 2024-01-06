

import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

const Section = () => {
  return (

    <div className='lg: bg-slate-900  '>

      {/* <svg className='hidden lg:block lg:w-full  ' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto' viewBox='0 0 800 300'>
        <rect fill='#0B0433' width='800' height='800' />
        <g fill='none' stroke='#404' stroke-width='1'>
          <path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' />
          <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' />
          <path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' />
          <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' />
          <path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' />
        </g>
        <g fill='#171445'>
          <circle cx='769' cy='229' r='5' />
          <circle cx='539' cy='269' r='5' />
          <circle cx='603' cy='493' r='5' />
          <circle cx='731' cy='737' r='5' />
          <circle cx='520' cy='660' r='5' />
          <circle cx='309' cy='538' r='5' />
          <circle cx='295' cy='764' r='5' />
          <circle cx='40' cy='599' r='5' />
          <circle cx='102' cy='382' r='5' />
          <circle cx='127' cy='80' r='5' />
          <circle cx='370' cy='105' r='5' />
          <circle cx='578' cy='42' r='5' />
          <circle cx='237' cy='261' r='5' />
          <circle cx='390' cy='382' r='5' />
        </g>
      </svg> */}




      <div className='lg: section_container mx-10 my-10 flex justify-between'>
        <div className='section_left hidden lg:block   w-1/3 my-auto'>
          <div>
            <h1 className='text-xl font-sans font-bold text-gray-400'>Choose what to learn</h1>
          </div>
          <div>
            <p className='text-prettier font-normal text-gray-300'>Start learning the best programming languages..</p>
          </div>
        </div>

        <div className='section_right w-full mx-auto  mb-5 mt-5 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 lg:mx-0 lg:max-w-none md:gap-x-8 lg:grid-cols-3 md:grid-cols-2'>

          <Link
            href='/Course/HTML'
            className='courses border-sky-700 border w-full mx-auto my-auto sm:w-60 md:w-60 flex place-content-around items-center justify-between py-2 px-5 rounded-lg transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:scale-100 hover:shadow-2xl duration-300'
          >
            <img src='/image7.png' alt='HTML' title='HTML' className='mr-2' />
            <p className='text-right  text-white'>HTML</p>
          </Link>


          <Link href='/Course/CSS' className='courses border border-sky-700  flex w-full mx-auto my-auto sm:w-60 md:w-60 place-content-around items-center justify-between py-2 px-5 rounded-lg transition ease-in-out   hover:-translate-y-1 hover:bg-slate-800 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image6.png' alt='CSS' title='CSS' className='mr-2' />
            <p className='text-right text-white'>CSS</p>
          </Link>

          <Link href='/Course/javascript' className='courses border border-sky-700 flex  w-full mx-auto my-auto sm:w-60 md:w-60 place-content-around items-center justify-between py-2 px-5 rounded-lg transition ease-in-out   hover:-translate-y-1 hover:bg-slate-800 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image5.png' alt='JS' title='JS' className='mr-2' />
            <p className='text-right text-white'>JS</p>
          </Link>

         
          <Link href='/C' className='lg:courses border w-full md:w-60 border-sky-700 mx-auto my-auto place-content-around items-center justify-between py-2 px-5 rounded-lg  hidden lg:flex  transition ease-in-out hover:bg-slate-800 hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image1.png' alt='C' title='C' className='mr-2' />
            <p className='text-right text-white'>C</p>
          </Link>

          <Link href='/Python' className='lg:courses border w-full md:w-60 border-sky-700 mx-auto my-auto place-content-around items-center justify-between py-2 px-5 rounded-lg  hidden lg:flex  transition ease-in-out hover:bg-slate-800 hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image2.png' alt='Python' title='Python' className='mr-2' />
            <p className='text-right text-white'>Python</p>
          </Link>


          <Link href='/React' className='courses border border-sky-700  w-full mx-auto my-auto md:w-60 place-content-around items-center justify-between py-2 px-5 rounded-lg  hidden lg:flex  transition ease-in-out hover:bg-slate-800  hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image3.png' alt='React' title='React' className='mr-2' />
            <p className='text-right text-white'>React</p>
          </Link>

          <Link href='/php' className='courses border border-sky-700 w-full mx-auto my-auto md:w-60 place-content-around items-center justify-between py-2 px-5 rounded-lg   hidden lg:flex  transition ease-in-out hover:bg-slate-800  hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image4.png' alt='PHP' title='PHP' className='mr-2' />
            <p className='text-right text-white'>PHP</p>
          </Link>

          {/* Hide the last 8 links for small screens */}
          <Link href='/Java' className='courses border border-sky-700 w-full md:w-60 mx-auto my-auto  place-content-around items-center justify-between py-2 px-5 rounded-lg  hidden lg:flex  transition ease-in-out hover:bg-slate-800  hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image8.png' alt='Java' title='Java' className='mr-2' />
            <p className='text-right text-white'>Java</p>
          </Link>

          <Link href='/C++' className='courses border border-sky-700 w-full md:w-60  mx-auto my-auto place-content-around items-center justify-between py-2 px-5 rounded-lg  hidden lg:flex  transition ease-in-out hover:bg-slate-800  hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/image9.png' alt='C++' title='C++' className='mr-2' />
            <p className='text-right text-white'>C++</p>
          </Link>

          <Link href='/Swift' className='courses border border-sky-700 w-full md:w-60 mx-auto my-auto place-content-around items-center justify-between py-2 px-5 rounded-lg hidden lg:flex transition ease-in-out hover:bg-slate-800 hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/swifticon.png' alt='swift' title='swift' className='mr-2' />
            <p className='text-right text-white'>Swift</p>
          </Link>

          <Link href='/Typescript' className='courses border border-sky-700 w-full md:w-60 mx-auto my-auto place-content-around items-center justify-between py-2 px-5 rounded-lg hidden lg:flex transition ease-in-out hover:bg-slate-800 hover:-translate-y-1 hover:scale-100 hover:shadow-2xl duration-300'>
            <img src='/ts.png' alt='typescript' title='Typescipt' className='mr-2 w-' />
            <p className='text-right text-white'>Typescript</p>
          </Link>


          <Link href='/Course_list' className='w-full py-3 px-5 md:w-60 sm:w-60 mx-auto my-auto  flex place-content-around items-center justify-between font-medium text-white bg-gradient-to-r from-amber-500 to-amber-700 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 rounded-full shadow-sm cursor-pointer'>
            <p className='mr-2 text-white'>Explore more
            </p>
            <ArrowForwardIosIcon className='text-right text-white' />
 
          </Link>



        </div>


      </div>
    </div>


  )
}

export default Section