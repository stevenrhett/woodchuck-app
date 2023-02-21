import React, {useState} from 'react'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import vector from "./assets/Vector.svg";
import {NavLink} from "react-router-dom";
import TreeStump from "./assets/tree-stump.png"


export default function HeroNavigation() {
    const shoot = () => {
        alert("If you are getting this message mention ALERT20 " +
            "and we will give you 20 % of your next service." + "Thanks");
    }
    const [isDivVisible, setIsDivVisible] = useState(true);

    function toggle() {
        setIsDivVisible(!isDivVisible);
    }

    return (<Disclosure as="nav" className="mx-auto bg-slate-700">
        {({open}) => (<>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-8 w-auto lg:hidden animate-bounce duration-75"
                                src={vector}
                                alt="Photo a half of a saw blade."/>
                            <div className="animate-ping lg:hidden duration-75">
                                <span>🪵🪵🪵</span></div>
                            <img
                                className="hidden h-8 w-auto lg:block"
                                src={vector}
                                alt="Photo a half of a saw blade"
                            />
                        </div>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            <ul
                                className="inline-flex items-center px-1 pt-1  font-medium text-white"
                            >
                                <li className=" px-1 pt-1 ml-3 block hover:bg-gray-100 text-lg rounded hover:text-gray-900"
                                ><NavLink onClick={shoot} to="/" end>Home</NavLink>
                                </li>
                                <span className="ml-4">|</span>
                                <li className=" px-1 pt-1 block ml-3 hover:bg-gray-100 text-lg rounded hover:text-gray-900"
                                ><NavLink onClick={toggle}
                                          to="stumps">Stumps</NavLink>
                                </li>
                                <span className="ml-4">|</span>
                                <li className=" px-1 pt-1 ml-3 block hover:bg-gray-100 text-lg rounded hover:text-gray-900"
                                ><NavLink onClick={toggle}
                                          to="staff">Staff</NavLink>
                                </li>
                                <span className="ml-4">|</span>
                                <li className=" px-1 pt-1 ml-3 block hover:bg-gray-100 text-lg rounded hover:text-gray-900"
                                ><NavLink onClick={toggle}
                                          to="contact">Contact</NavLink>
                                </li>
                                <span className="ml-4">|</span>
                                <li
                                    className=" px-1 pt-1 block ml-3 hover:bg-gray-100 text-lg rounded hover:text-gray-900"
                                ><NavLink onClick={toggle}
                                          to="services">Services</NavLink></li>
                                <span>
                                    <img src={TreeStump} alt="" className="ml-4"/>
                                </span></ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="-ml-2 mr-2 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="bg-slate-700lg:hidden"
            >
                <div>
                    <div className="space-y-1 pt-2 pb-3 opacity-95">
                        <div className="pt-2 pb-3">
                            <Disclosure.Button
                                className="block border-l-2 font-medium text-white hover:bg-gray-100 hover:text-lg hover:rounded hover:text-gray-500 focus sm:pl-5 sm:pr-6"

                            ><NavLink to="/" end>Home</NavLink>

                            </Disclosure.Button>
                        </div>
                        <div className="pt-2 pb-3">
                            <Disclosure.Button
                                className="block border-l-2 font-medium text-white hover:bg-gray-100 hover:text-lg hover:rounded hover:text-gray-500 focus sm:pl-5 sm:pr-6"
                            >
                                <NavLink onClick={toggle} to="stumps">Stumps</NavLink>
                            </Disclosure.Button>
                        </div>
                        <div className="pt-2 pb-3">
                            <Disclosure.Button
                                className="block border-l-2 font-medium text-white hover:bg-gray-100 hover:text-lg hover:rounded hover:text-gray-500 focus sm:pl-5 sm:pr-6"
                            ><NavLink onClick={toggle}
                                      to="staff">Staff</NavLink>
                            </Disclosure.Button>
                        </div>
                        <div className="pt-2 pb-3">
                            <Disclosure.Button
                                className="block border-l-2 font-medium text-white hover:bg-gray-100 hover:text-lg hover:rounded hover:text-gray-500 focus sm:pl-5 sm:pr-6"
                            ><NavLink onClick={toggle}
                                      to="contact">Contact</NavLink>
                            </Disclosure.Button>
                        </div>
                        <div className="pt-2 pb-3">
                            <Disclosure.Button
                                className="block border-l-2 font-medium text-white hover:bg-gray-100 hover:text-lg hover:rounded hover:text-gray-500 focus sm:pl-5 sm:pr-6"
                            ><NavLink onClick={toggle}
                                      to="services">Services</NavLink>
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>
            </Disclosure.Panel>

        </>)}
    </Disclosure>)
}









