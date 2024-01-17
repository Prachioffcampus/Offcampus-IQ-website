import React from 'react';

const Hero2 = () => {
  return (
    <div className='hero2_main hidden sm:hidden md:block bg-slate-100 px-6 py-24 '>
      <div className='hero2_top text-gray-300 font-medium block text-center py-6'>
        Organizations we've helped
      </div>
      <div className='hero2_bottom  px-4 md:px-8 pt-8 pb-8 grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
        <img
          src='/img1.png'
          alt='image_not_found'
          className='mt-3 brightness-50 w-full sm:w-auto'
        />
        <img
          src='/img2.png'
          alt='image_not_found'
          className='mt-2 brightness-50 w-full sm:w-auto'
        />
        <img
          src='/img3.png'
          alt='image_not_found'
          className='mt-7 mr-5 brightness-50 w-full sm:w-auto'
        />
        <img
          src='/img4.png'
          alt='image_not_found'
          className='mt-3 brightness-50 w-full sm:w-auto'
        />
        <img
          src='/img5.png'
          alt='image_not_found'
          className='mt-5 brightness-50 w-full sm:w-auto'
        />
      </div>
    </div>
  );
};

export default Hero2;
