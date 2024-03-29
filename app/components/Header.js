"use client"
import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Router from "next/router";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/courses",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: "RoadMaps",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/roadmap",
  },
  {
    name: "Cheatsheets",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/cheatsheet",
  },
  {
    name: "Videos",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Blogs",
    description: "Understand how we take your privacy seriously.",
    href: "/blog",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  // useEffect(()=>{
  //   // Router.reload();
  //   Router.events.on('routeChangeComplete', () => {

  //   });
  // }, [])

  return (
    <Popover className="relative py-5  bg-slate-100 font-jk">
      <div className="flex items-center mx-auto 
      justify-between py-2 lg:justify-start md:space-x-10 px-6 md:px-10 lg:px-16">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Offcampus Academy</span>
            <Link legacyBehavior href="/">
              <img src="/offcampus-logo2.png" width="150px" height="35px" />
            </Link>
          </a>
        </div>

        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        {/* Desktop View Header*/}
        <div className="hidden lg:flex md:flex-1 lg:items-center lg:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (

                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-600" : "text-textGrey",
                      "group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-600  focus:outline-none"
                    )}
                  >
                    <span>Bootcamps</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-textGrey",
                        "ml-2 h-5 w-5 group-hover:text-gray-600"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link legacyBehavior key={item.name} href={item.href} passHref>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-lightOrange text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6 text-black"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-5 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                Enterprise
                              </div>
                              <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced
                              tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link legacyBehavior href="/courses">
              <a
                className="text-base font-medium text-textGrey hover:text-gray-600"
              >
                Courses
              </a>
            </Link>
            <Link legacyBehavior href="/businessSolution">
              <a
                className="text-base font-medium text-textGrey hover:text-gray-600"
              >
                Business
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-600 outline-none border-none focus:outline-none" : "text-textGrey",
                      "group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-600 hover:font-medium"
                    )}
                  >
                    <span>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-textGrey",
                        "ml-2 h-5 w-5 group-hover:text-gray-600"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link legacyBehavior key={item.name} href={item.href} passHref>
                              <a className="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className='  w-full md:w-[30vh] lg:w-auto lg:mr-10 text-center md:text-end'>
            <Link
              href='/Signup'
              className='py-3 p-5 font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 rounded-full w-full shadow-sm cursor-pointer'
            >
              Get started for free
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        className="relative z-10"
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <Link legacyBehavior key={item.name} href={item.href} passHref>
                      <a className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-lightOrange text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a
                    href="#"
                    className=" bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-500 rounded-full w-[30vh] shadow-sm text-white"
                  >
                    Get Started For Free
                  </a>

                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
