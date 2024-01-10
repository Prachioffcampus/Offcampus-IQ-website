import React from 'react';
import Link from 'next/link';

const Blog = () => {

  const posts = [

    {
      id: 1,
      title: 'Top  50 javascript interview questions',
      href: './Blogs/JS',
      imageUrl:
        'https://tse4.mm.bing.net/th?id=OIP.1Se7tgAnRox2K9H5L77QOAAAAA&pid=Api&P=0&h=220',
      date: 'Mar 16, 2023',
      author: {
        name: 'John Doe',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },

  
    {
      id: 2,
      title: 'Top  52 Node js interview questions',
      href: './Blogs/Nodejs',
      imageUrl:
        'https://tse3.mm.bing.net/th?id=OIP.4eZw-zCGukXnfl5q6NfS9AHaD5&pid=Api&P=0&h=220',
      date: 'Mar 16, 2023',
      author: {
        name: 'John Doe',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },

    {
      id: 3,
      title: 'Top  Typescipt interview questions',
      href: './Course_list',
      imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.jP8blVZ7VM4VKyQ7o2W4mAHaEK&pid=Api&P=0&h=220',
      date: 'Mar 16, 2023',
      author: {
        name: 'John Doe',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },

    {
      id: 4,
      title: 'Top  Typescipt interview questions',
      href: './Course_list',
      imageUrl:
        'https://tse1.mm.bing.net/th?id=OIP.eBZhG1Mm041N3cDzjufMVgHaDt&pid=Api&P=0&h=220',
      date: 'Mar 16, 2023',
      author: {
        name: 'John Doe',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },





  ]

  return (

    <div className="bg-white py-24 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">From the blog's</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Let's Learn how to grow with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16  grid max-w-2xl sm:scroll-mt-7 grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col shadow-lg py-5  px-5  items-start justify-between border border-transparent hover:border-blue-500  rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-70 hover:shadow-2xl duration-300">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt="blog_users"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>

                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time  className="text-gray-500">
                    {post.date}
                  </time>

                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 hover:text-teal-800">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="mt-3 text-base text-gray-600">{post.preview}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>


  );
};

export default Blog;
