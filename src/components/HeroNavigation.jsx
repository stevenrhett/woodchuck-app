import React from 'react'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import vector from "../assets/Vector.svg";
import {NavLink, useLocation} from "react-router-dom";

const navigation = [{name: 'Home', href: '/home', current: false}, {
    name: 'Stumps', href: '/stumps', current: false
}, {name: 'Staff', href: '/staff', current: false}, {
    name: 'Contact', href: '/contact', current: false
}, {name: 'Services', href: '/services', current: false},]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function HeroNavigation() {

    const {pathname} = useLocation();


    const updatedNavigation = navigation.map((item) => ({
        ...item, current: item.href === pathname
    }));



    return (<Disclosure as="nav" className="mx-auto bg-slate-900">
        {({open}) => (<>
            <div className="max-w-2xl mx-auto  rounded-md shadow-md">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex flex-1 justify-start">
                        <div className="lg:left-0 lg:top-0">
                            <img
                                className="h-12 w-auto animate-bounce duration-75"
                                src={vector}
                                alt="Photo a half of a saw blade."/>
                            <div className="animate-ping duration-75">
                                <span>🪵🪵🪵</span></div>

                        </div>
                        <div className="flex-1 flex items-center justify-center">
                        </div>
                        <div className="text-white  hidden lg:mr-6 justify-center lg:block">
                            <div className="text-white pt-4 text-center flex mr-6 justify-center space-x-4">
                                {updatedNavigation.map((item) => (<NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex lg:hidden text-white">
                        {/* Mobile menu button*/}
                    </div>

                    {/*this is the menu of three bars on the small screen top right*/}

                    <div
                        className="relative text-white  flex items-center justify-end h-16 lg:hidden right-4 items-center pl-2">
                        <Disclosure.Button
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-600 text-white outline-white ring-1 ring-inset ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (<Bars3Icon
                                className="block h-6 w-6" aria-hidden="true"/>)}
                        </Disclosure.Button>
                    </div>

                </div>
            </div>

            {/*this is the menu that appears after clicking the three bars on the small screen*/}
            <Disclosure.Panel className="lg:hidden">
                <div className="text-white brightness-100 max-h-screen space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (<Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(item.current ? 'bg-slate-900 text-white opacity-75' : 'hover:bg-gray-700 opacity-90', 'block px-3 py-2 rounded-md  font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <NavLink to={item.href}>{item.name}</NavLink>
                    </Disclosure.Button>))}
                </div>
            </Disclosure.Panel>

        </>)}
    </Disclosure>)
}