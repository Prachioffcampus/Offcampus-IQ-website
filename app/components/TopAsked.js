import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TopAsked = () => {
  return (
    <>
    {/*  <div className='top_asked  flex flex-col items-center mx-4'>
    /  <h2 className='text-4xl font-bold text-teal-800'>Top Asked Questions</h2>
    //   <Accordion type="single" collapsible className="w-full max-w-lg mt-2">
    //     <AccordionItem value="item-1">
    //       <AccordionTrigger>Is it accessible?</AccordionTrigger>
    //       <AccordionContent>
    //         Yes. It adheres to the WAI-ARIA design pattern.
    //       </AccordionContent>
    //     </AccordionItem>
    //     <AccordionItem value="item-2">
    //       <AccordionTrigger>Is it styled?</AccordionTrigger>
    //       <AccordionContent>
    //         Yes. It comes with default styles that match the other
    //         components&apos; aesthetic.
    //       </AccordionContent>
    //     </AccordionItem>
    //     <AccordionItem value="item-3">
    //       <AccordionTrigger>Is it animated?</AccordionTrigger>
    //       <AccordionContent>
    //         Yes. It's animated by default, but you can disable it if you prefer.
    //       </AccordionContent>
    //     </AccordionItem>
    //   </Accordion>
     </div> */}

<div className="relative bg-slate-800">
        <div className="hidden sm:block md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 800 200"
          >
            <rect fill="#0A012A" width="800" height="200" />
            <g fill='none' stroke='#3D4440' stroke-width='1'>
              <path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' />
              <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' />
              <path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' />
              <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' />
              <path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' />
            </g>
            <g fill='#280987'>
              <circle cx='69' cy='229' r='5' />
              <circle cx='39' cy='269' r='5' />
              <circle cx='03' cy='493' r='5' />
              <circle cx='31' cy='737' r='5' />
              <circle cx='20' cy='660' r='5' />
              <circle cx='09' cy='538' r='5' />
              <circle cx='295' cy='764' r='5' />
              <circle cx='40' cy='599' r='5' />
              <circle cx='102' cy='382' r='5' />
              <circle cx='127' cy='80' r='5' />
              <circle cx='370' cy='105' r='5' />
              <circle cx='578' cy='42' r='5' />
              <circle cx='237' cy='261' r='5' />
              <circle cx='390' cy='382' r='5' />
            </g>
          </svg>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">


          {/* Section Main Left - Show only on larger screens */}
          <div className="section_main_left py-5 text-center md:w-1/2 lg:w-1/3 hidden md:block">
            <div className="text-2xl font-bold text-gray-300">
              Choose what to learn
            </div>
            <div className="font-light m-2 text-wrap text-gray-400">
              Start learning the best programming language
            </div>
          </div>

          {/* Section Main Right */}
          <div className="section_main_right md:w-1/2 lg:w-2/3 mt-5 grid px-5 grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


            {/* HTML Courses */}
            <li title="HTML Courses">
              <Link href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="image7.png"
                        loading="lazy"
                        alt="HTML Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">HTML</h3>
                  </div>
                </div>
              </Link>
            </li>

            {/* Java Courses */}
            <li title="Java Courses">
              <Link href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="/image8.png"
                        loading="lazy"
                        alt="Java Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">Java</h3>

                  </div>
                </div>
              </Link>
            </li>



            {/* PHP Courses */}
            <li title="PHP Courses">
              <Link href='/'>
                <div className="explore-card text-white hidden:sm rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="image4.png"
                        loading="lazy"
                        alt="php Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">php</h3>

                  </div>
                </div>
              </Link>
            </li>


            {/* React Courses */}
            <li title="React Courses">
              <Link href='/'>
                <div className="explore-card  hidden:sm  text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">

                      <img
                        src="image3.png"
                        loading="lazy"
                        alt="React Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">React</h3>
                  </div>
                </div>
              </Link>
            </li>


            {/* CSS Courses */}
            <li title="CSS Courses">
              <Link href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="image6.png"
                        loading="lazy"
                        alt="CSS Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">CSS</h3>
                  </div>
                </div>
              </Link>
            </li>

            {/* JS Courses */}
            <li title="JS Courses">
              <Link href='/JS'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl transform transition-transform  duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">

                      <img
                        src="image5.png"
                        loading="lazy"
                        alt="JS Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">Javascript</h3>
                  </div>
                </div>
              </Link>
            </li>

            {/* C Courses */}
            <li title="C Courses">
              <Link href='/'>
                <div className="explore-card  hidden:sm  text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="image1.png"
                        loading="lazy"
                        alt="C Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title text-center">C</h3>

                  </div>
                </div>
              </Link>
            </li>

            {/* Python Courses */}
            <div className="hidden md:block">
              <li title="Python Courses">
                <Link href='/'>
                  <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                    {/* Image Wrapper */}
                    <div className="explore-card__img-wrapper pr-4">
                      <div className="pro-image-loader loaded">
                        <img
                          src="image2.png"
                          loading="lazy"
                          alt="Python Courses"
                          width="35"
                          height="35"
                        />
                      </div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="explore-card__content-wrapper px-2">
                      <h3 className="explore-card__title">Python</h3>
                    </div>
                  </div>
                </Link>
              </li>
            </div>


            {/* Swift Courses */}
            <li className='hidden sm:block ' title="Swift Courses">
              <Link  href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="swifticon.png"
                        loading="lazy"
                        alt="Swift Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">Swift</h3>

                  </div>
                </div>
              </Link>
            </li>


            {/* c++ Courses */}
            <li title="C++ Courses">
              <Link href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="c++.png"
                        loading="lazy"
                        alt="C++ Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">C++</h3>

                  </div>
                </div>
              </Link>
            </li>


            {/* Typescript Courses */}
            <li title="TS Courses">
              <Link href='/'>
                <div className="explore-card text-white rounded-lg flex p-1 bg-sky-950 items-center hover:shadow-2xl  transform transition-transform duration-300 hover:translate-y-[-5px]">
                  {/* Image Wrapper */}
                  <div className="explore-card__img-wrapper pr-4">
                    <div className="pro-image-loader loaded">
                      <img
                        src="ts.png"
                        loading="lazy"
                        alt="Typescript Courses"
                        width="35"
                        height="35"
                      />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="explore-card__content-wrapper px-2">
                    <h3 className="explore-card__title">Typescript</h3>

                  </div>
                </div>
              </Link>
            </li>



            <li title="Explore more" className="">
              <div className="explore-card text-white  flex p-1 items-center hover:shadow-2xl ">
                {/* Image Wrapper */}
                <Link
                  href="/Course"
                  className="py-3  p-5 font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 rounded-full w-full shadow-sm cursor-pointer"
                >
                  Explore more &#9654;
                </Link>
              </div>
            </li>
          </div>

        </div>
      </div>

</>
   
  );
};

export default TopAsked;
