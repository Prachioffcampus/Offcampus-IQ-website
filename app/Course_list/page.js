
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import Link from 'next/link';




const Page = () => {

    const posts = [
        {
            id: 1,
            title: 'Learn SQL',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            imageUrl:
                '/sql.png'
        },

        {
            id: 2,
            title: 'Learn DSA',
            href: '#',
            imageUrl:
                '/dsa.png'
        },
        {
            id: 3,
            title: 'Learn Pthon Basics',
            href: '#',
            imageUrl:
                '/python-basic.png'
        },
        {
            id: 4,
            title: 'Learn Python',
            href: '#',
            imageUrl:
                '/python.png'
        },
        {
            id: 5,
            title: 'Learn Java',
            href: '#',
            imageUrl:
                '/java-basics.png'
        },
        {
            id: 6,
            title: 'Learn React',
            href: '#',
            imageUrl:
                '/react.png'
        },
        {
            id: 7,
            title: 'Learn C',
            href: '#',
            imageUrl:
                '/c-programming.png'
        },
        {
            id: 8,
            title: 'Learn C++',
            href: '#',
            imageUrl:
                '/cpp.png'
        },
        // More posts...
    ]

    return (
        <div>
            <div className='course_main py-10'>
                <h1 className='text-center first-line:uppercase first-line:tracking-widest first-letter:text-2xl first-letter:font-bold first-letter:mr-1'>Enroll now for Free !</h1>
            </div>



            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="relative mt-2 flex items-center">
                        <input
                            type="text"
                            name="search"
                            placeholder='search here courses'
                            id="search"
                            className="block w-56 rounded-md border-0 text-center py-1.5 pr-14 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <kbd className="inline-flex items-center  px-1  text-xs text-gray-400">
                                <SearchIcon />
                            </kbd>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='course_content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto ml-10 mr-10 mb-10'>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3  lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in HTML</h2>
                    </div>
                    <figure><img src="html.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in CSS</h2>
                    </div>
                    <figure><img src="css.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in JS</h2>
                    </div>
                    <figure><img src="js.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in C</h2>
                    </div>
                    <figure><img src="c-programming.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>


                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in C++</h2>
                    </div>
                    <figure><img src="cpp.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in Java</h2>
                    </div>
                    <figure><img src="java-basics.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in Python</h2>
                    </div>
                    <figure><img src="python.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in React</h2>
                    </div>
                    <figure><img src="react.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>


                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in php</h2>
                    </div>
                    <figure><img src="php.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>

                <Link href='/HTML' className="card w-full sm:w-2/3 md:w-1/3 lg:w-52 hover:shadow-2xl shadow-xl border border-transparent hover:border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-sm text-start">Become Master in Swift</h2>
                    </div>
                    <figure><img src="swift.png" height={150} width={150} alt="Shoes" /></figure>
                </Link>


            </div> */}

            <div className="bg-white py-12 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 md:grid-cols-2">
                        {posts.map((post) => (
                            <article key={post.id} className="flex flex-col shadow-lg items-start justify-between border border-transparent hover:border-blue-500  rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-70 hover:shadow-2xl duration-300">

                                <div className="max-w-xl mx-auto">

                                    <div className="group relative">
                                        <h3 className="mt-3 text-md font-semibold text-center leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="relative w-full mx-auto my-6 sm:w-56 sm:mx-0 items-center text-center">
  <img
    src={post.imageUrl}
    alt=""
    className="mx-auto aspect-w-5 aspect-h-5 sm:aspect-w-2 sm:aspect-h-2 lg:aspect-w-2 lg:aspect-h-2 rounded-2xl object-cover"
  />
</div>



                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </div>




    );
};

export default Page;




