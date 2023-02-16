import React, {useState} from 'react';
import vector from "../assets/Vector.svg";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {Link, NavLink} from "react-router-dom";
import {Dialog} from "@headlessui/react";
import TimAtWork from '/src/assets/timatwork.png';
import {Bars3Icon} from "@heroicons/react/20/solid/index.js";


const navigation = [
    {name: 'Home', href: '/home'},
    {name: 'Stumps', href: '/stumps'},
    {name: 'Staff', href: '/staff'},
    {name: 'Contact', href: '/contact'},
    {name: 'Services', href: '/services'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeroNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <>
            <div>
                <div className="navbar" aria-label="Global">
                    <div className="navbar-start">
                        <a href="https://woodchuckgrinding.com/">
                            <span className="sr-only">Woodchuck Stump Grinding</span>
                            <img className="absolute h-16 top-0 left-0 object-cover"
                                 src={vector} alt="Photo a half of a saw blade."/>
                        </a>
                    </div>
                    <div className="lg:hidden navbar-center">
                        <button href="sms:(1)(7816501119)" className="btn btn-outline gap-2">
                            Text Us Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                            </svg>
                        </button>

                    </div>
                    <div className="right-0 navbar-end">
                        <button className="right-0 btn btn-outline text-gray-400"
                                onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10" aria-hidden="true"/>
                        </button>
                    </div>


                    <div className="hidden lg:flex lg:justify-evenly lg:items-center lg:gap-x-12">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                exact
                                className={classNames(
                                    'group w-full p-3 rounded-md flex flex-col items-start text-md font-medium',
                                    'text-white hover:bg-neutral-100 hover:text-xl',
                                    'ml-4 lg:ml-0 lg:mr-4',
                                    // add left and right margins
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="relative isolate overflow-hidden">
                    <img
                        src={TimAtWork}
                        alt="photo of a heavy equipment operator using a stump grinding machine."
                        className="absolute -z-10 inset-0.5 w-full h-full object-cover"
                    />

                    <div>
                        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                            <Dialog.Panel focus="true"
                                          className="fixed inset-0 z-10 overflow-y-auto opacity-90 bg-neutral px-6 py-6 lg:hidden">
                                <div className="flex items-center justify-between">
                                    <Link to={'/..'} className="-m-1.5 p-1.5">
                                        <span className="sr-only">Woodchuck Stump Grinding</span>
                                        <img className="h-8" src={vector} alt="Photo a half of a saw blade."/>
                                    </Link>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-100/25">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    exact
                                                    className={classNames(
                                                        'group w-full p-3 rounded-md flex flex-col items-start text-md font-medium',
                                                        'text-gray-200 hover:bg-gray-500 hover:text-xl'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Dialog>
                        <div className="mx-auto px-4 py-48 lg:py-56">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold tracking-tight text-gray-100">
                                    Woodchuck Stump Grinding
                                </h1>
                                <p className="mt-4 text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                                    North Weymouth Tree Stump Grinding business. Owner operated.

                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>)
}
