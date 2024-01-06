import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero_main bg-slate-100 flex flex-col md:flex-row px-4 md:px-14 items-center justify-center'>
      <div className='hero_main_left md:w-full lg:w-1/2 text-center font-sans flex flex-col items-center'>
        <div className='mt-10 text-teal-600 mb-4 font-bold text-xs'>WELCOME TO OFFCAMPUS ACADEMY !</div>
        <div className='text-4xl sm:text-[2.5rem] text-[1.825rem] font-bold'>
          Best Online Education
          <br />
          Expertise
        </div>

        <div className='mt-10 w-full md:w-full lg:w-auto'>
          <Link href='/Course' className='py-3 p-5 font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 rounded-full w-full shadow-sm cursor-pointer'>Explore courses</Link>
        </div>
      </div>

      <div className='hero_main_right hidden md:flex md:w-full lg:w-1/2'>
        <Image src='/bg.png' alt='image_searching' width={400} height={100} className='max-w-full drop-shadow-2xl hover:drop-shadow-lg' />
      </div>
    </div>
  );
};

export default Hero;
