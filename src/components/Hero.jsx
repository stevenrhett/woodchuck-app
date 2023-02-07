import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import vector from '/src/assets/Vector.svg';
import TimAtWork from '/src/assets/timatwork.png';
import {NavLink} from "react-router-dom";

const navigation = [{name: 'Home', href: '/home'}, {name: 'Stumps', href: '/stumps'}, {
    name: 'Staff', href: '/staff'
}, {name: 'Settings', href: 'settings'},]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (<div className="relative isolate  overflow-hidden bg-gray-900">
        <img
            src={TimAtWork}
            alt="photo of a heavy equipment operator using a stump grinding machine."
            className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
            >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".9"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" offset="3"/>
                        <stop offset={1} stopColor="green"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="px-6 lg:px-8">
            <nav className="flex items-center justify-between pt-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="https://woodchuckgrinding.com/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Woodchuck Stump Grinding</span>
                        <img className="h-8" src={vector} alt="Photo a half of a saw blade."/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink to={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </NavLink>))}
                </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true"
                              className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Woodchuck Stump Grinding</span>
                            <img className="h-8" src={vector} alt="Photo a half of a saw blade."/>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-100/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (<NavLink
                                    to={item.href}
                                    key={item.name}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                                >
                                    {item.name}
                                </NavLink>))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="mb-8 flex justify-center">
                    <div
                        className="relative rounded-full py-1 px-3 text-sm font-bold bg-primary leading-6 text-white hover:bg-white hover:text-primary">
                        Text Us Now!{' '}
                        <a href="sms:(1)(7816501119)"
                           className="font-bold text-white hover:text-black">
                            <span className="absolute inset-0"/>
                            <span className="hover:black">→</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Woodchuck Stump Grinding
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Locally owned and operated business.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/about"
                            className="rounded-full bg-primary font px-3.5 py-1.5 hover:text-primary font-semibold leading-7 text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Learn More <span aria-hidden="true">→</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
            >
                <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".9"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" offset="3"/>
                        <stop offset={1} stopColor="green"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>)
}
