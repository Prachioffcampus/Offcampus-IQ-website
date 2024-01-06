import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mx-auto w-full py-8 bg-slate-800 px-8 lg:px-20">

      <div className="md:flex md:flex-row md:justify-between pt-8">

        <div className='footer_left lg:w-1/3 md:w-1/2   mx-5'>
          <img className='h-24' src='/favicon.png' alt='' title='offcampus logo' />
          <h1 className='text-prettier text-gray-300'>Simplifying Technologies</h1>
        </div>

        <div className='footer_right text-gray-300 mt-10 lg:w-2/3 md:w-1/2'>
          <p className="border-t-2 py-5">&copy; 2024 offcampus Academy. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;



{/* <div className="flex space-x-6">
            <a href="/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 cursor-pointer">
             <LinkedInIcon/>
            </a>
            <a href='/' target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 cursor-pointer">
             <FacebookIcon/>
            </a>
            <a href='/' target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 cursor-pointer">
             <InstagramIcon/>
            </a>
            <a href='/' target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 cursor-pointer">
             <TwitterIcon/>
            </a>
            <a href='/' target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 cursor-pointer">
             <GitHubIcon/>
            </a>
          </div> */}








{/* <div className="md:grid md:grid-cols-2 md:gap-8 justify-between">
            <div>
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><Link href="/courses" className="text-base text-gray-400 hover:text-gray-500">Courses</Link></li>
                <li><Link href="/blog" className="text-base text-gray-400 hover:text-gray-500">Roadmaps</Link></li>
                <li><Link href="/roadmap" className="text-base text-gray-400 hover:text-gray-500">Blogs</Link></li>
                <li><Link href="/cheatsheet" className="text-base text-gray-400 hover:text-gray-500"></Link></li>
              </ul>
            </div>
            
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8 justify-between">
            <div>
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><Link href="/Course" className="text-base text-gray-400 hover:text-gray-500">About</Link></li>
                <li><Link href="#" className="text-base text-gray-400 hover:text-gray-500">Blog</Link></li>
                <li><Link href="#" className="text-base text-gray-400 hover:text-gray-500">Jobs</Link></li>
               
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-gray-500">Claim</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-gray-500">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-gray-500">Terms</a></li>
              </ul>
            </div>
          </div>  */}