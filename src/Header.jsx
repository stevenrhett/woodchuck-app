import React from 'react';
import {Disclosure} from '@headlessui/react'
import {Bars3Icon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";


export default function Header() {
    return (<Disclosure as="nav" className="bg-gray-800">
        {({open}) => (<>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0">

                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                 {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link to='/home'
                                      className="rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white">
                                    Home
                                </Link>

                                <Link to='/teams'
                                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Team
                                </Link>

                                <Link to='/projects'
                                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to='/calendar'
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Services
                                </Link>
                                <Link
                                    to='/contact'
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Contact Page
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="w-full max-w-lg lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    {/*<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>*/}
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                                    placeholder="Search"
                                    type="search"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                        </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                        <div className="flex items-center">
                            <Link to='/home'>
                                <button
                                    type="button"
                                    className="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                </button>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Disclosure.Button
                        as="a"
                        href='/home'
                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                    >
                        Dashboard
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href='/teams'
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Team
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href='/projects'
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Projects
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href='/calendar'
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Calendar
                    </Disclosure.Button>
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="flex items-center px-5">

                    </div>
                </div>
            </Disclosure.Panel>
        </>)}
    </Disclosure>)
}

