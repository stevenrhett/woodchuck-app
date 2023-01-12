import React, {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Footer from "./footer.jsx";
import morestumps from "./assets/morestumps.png";

const navigation = [
    // {name: 'Changelog', href: '#'},
    // {name: 'About', href: '#'},
    // {name: 'Partners', href: '#'},
    // {name: 'News', href: '#'},
]

const contactDetails = [{
    name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567'
}, {name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567'}, {
    name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567'
}, {name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567'},]
const locations = [{city: 'Weymouth', address: ['Massachusetts, 02191']}]

const faqs = [{
    id: 1,
    question: 'How do you make holy water?',
    answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
}, {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
}, {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
}, {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
},]

export default function ContactPage() {
    return (
        <div className="bg-white">
        <header className="relative bg-gradient-to-l from-gray-800 to-cyan-700  pb-24 sm:pb-32">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src={morestumps}
                    alt=""
                />
                <div
                    className="absolute inset-0 bg-gradient-to-l from-gray-800 to-grey-900 mix-blend-multiply"
                    aria-hidden="true"
                />
            </div>
            <Popover as="div" className="relative z-10">
                <nav
                    className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 pb-2 lg:px-8"
                    aria-label="Global"
                >
                    {/*<div className="flex w-full items-center justify-between lg:w-auto">*/}
                    {/*    /!*<a href="#">*!/*/}
                    {/*    /!*    <span className="sr-only">Your Company</span>*!/*/}
                    {/*    /!*    <img*!/*/}
                    {/*    /!*        className="h-8 w-auto sm:h-10"*!/*/}
                    {/*    /!*        src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=300"*!/*/}
                    {/*    /!*        alt=""*!/*/}
                    {/*    /!*    />*!/*/}
                    {/*    /!*</a>*!/*/}
                    {/*    <div className="-mr-2 flex items-center lg:hidden">*/}
                    {/*        <Popover.Button*/}
                    {/*            className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-sky-800 bg-opacity-0 p-2 text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white">*/}
                    {/*            <span className="sr-only">Open main menu</span>*/}
                    {/*            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>*/}
                    {/*        </Popover.Button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="hidden space-x-10 lg:ml-10 lg:flex">
                        {navigation.map((item) => (<a key={item.name} href={item.href}
                                                      className="text-base font-medium text-white hover:text-cyan-100">
                            {item.name}
                        </a>))}
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <a
                            href="#"
                            className="rounded-md border border-transparent bg-white bg-opacity-10 py-2 px-6 text-base font-medium text-white hover:bg-opacity-20"
                        >
                           Home
                        </a>
                    </div>
                </nav>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus
                                   className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
                        <div
                            className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">

                                <div className="-mr-2">
                                    <Popover.Button
                                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="pt-5 pb-6">
                                <div className="space-y-1 px-2">
                                    {navigation.map((item) => (<a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                                    >
                                        {item.name}
                                    </a>))}
                                </div>
                                <div className="mt-6 px-5">
                                    <a
                                        href="#"
                                        className="block w-full rounded-md border border-transparent bg-green-400 py-2 px-4 text-center font-medium text-white shadow hover:bg-green-500"
                                    >
                                     Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            <div className="relative   mx-auto mt-24 max-w-md px-6 sm:mt-32 sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"></h1>
                <p className="mt-6 max-w-3xl text-xl text-cyan-100">
                </p>
            </div>
        </header>

        <div>
            {/* Side-by-side grid */}
            <div className="bg-white">
                <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="divide-y divide-warm-gray-200">
                        <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                            <h2
                                id="contact-heading"
                                className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                            >
                                Get in touch
                            </h2>
                            <div
                                className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                                {contactDetails.map((item) => (<div key={item.name}>
                                    <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                                    <dl className="mt-2 text-base text-warm-gray-500">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>{item.email}</dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>{item.telephone}</dd>
                                        </div>
                                    </dl>
                                </div>))}
                            </div>
                        </section>
                        <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
                                 aria-labelledby="location-heading">
                            <h2
                                id="location-heading"
                                className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                            >
                                Locations
                            </h2>
                            <div
                                className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                                {locations.map((location) => (<div key={location.city}>
                                    <h3 className="text-lg font-medium text-warm-gray-900">{location.city}</h3>
                                    <div className="mt-2 space-y-1 text-base text-warm-gray-500">
                                        {location.address.map((line) => (<p key={line}>{line}</p>))}
                                    </div>
                                </div>))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-warm-gray-50">
                <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">Frequently asked
                                questions</h2>
                            <p className="mt-4 text-lg text-warm-gray-500">
                                Can’t find the answer you’re looking for? Reach out to our{' '}
                                <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                                    customer support
                                </a>{' '}
                                team.
                            </p>
                        </div>
                        <div className="mt-12 lg:col-span-2 lg:mt-0">
                            <dl className="space-y-12">
                                {faqs.map((faq) => (<div key={faq.id}>
                                    <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                                </div>))}
                            </dl>

                        </div>
                    </div>
                </div>
            </div>
            <main className="relative mt-4">
                <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true"/>
                <main className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <div
                        className="rounded-3xl bg-gradient-to-l from-gray-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
                        <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-4xl text-center mb-4 font-bold tracking-tight text-white sm:text-4xl">
                            <span className="block">Service Area</span>
                        </h2>
                        <ul className="menu menu-horizontal justify-between lg:menu-normal rounded-3xl bg-gradient-to-l from-gray-800 to-cyan-700 text-white w-auto p-2 rounded-box">
                            <li><a>Weymouth</a></li>
                            <li><a>Quincy</a></li>
                            <li><a>Braintree</a></li>
                            <li><a>Weymouth</a></li>
                            <li><a>Quincy</a></li>
                            <li><a>Braintree</a></li>
                            <li><a>Weymouth</a></li>
                            <li><a>Quincy</a></li>
                            <li><a>Braintree</a></li>
                            <li><a>Weymouth</a></li>
                            <li><a>Quincy</a></li>
                            <li><a>Braintree</a></li>
                        </ul>

                        <ul className="menu menu-horizontal justify-between lg:menu-normal rounded-3xl bg-gradient-to-l from-gray-800 to-cyan-700 text-white w-auto p-2 rounded-box">
                            <li><a>Plymouth</a></li>
                            <li><a>Carver</a></li>
                            <li><a>Taunton</a></li>
                            <li><a>Plymouth</a></li>
                            <li><a>Carver</a></li>
                            <li><a>Taunton</a></li>
                            <li><a>Plymouth</a></li>
                            <li><a>Carver</a></li>
                            <li><a>Taunton</a></li>
                            <li><a>Plymouth</a></li>
                            <li><a>Carver</a></li>
                            <li><a>Taunton</a></li>
                        </ul>
                    </div>

                        {/* Newsletter */}
                    <div className="relative mt-4">
                        <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true"/>
                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
                            <div
                                className="rounded-3xl bg-gradient-to-l from-gray-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
                                <div className="lg:w-0 lg:flex-1">
                                    <h2 className="text-3xl font-bold tracking-tight text-white">Submit Email if you
                                        dont have time to call? </h2>
                                    <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                                    </p>

                                </div>

                                <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                                    <form className="sm:flex">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email-address"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            type="submit"
                                            className="mt-3 flex w-full items-center justify-center rounded-md border border-white bg-base px-5 py-3 text-base font-medium text-white hover:bg-white text-blue-300 focus:outline-none focus:ring-2 focus:ring-base-100 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                        >
                                            Notify me
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <Footer />
            </main>
            </div>
        </div>
    )

}









