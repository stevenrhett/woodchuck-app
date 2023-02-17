import React from "react"
export default function Contact() {

    return (<>
        <div className="bg-slate-800 dark:bg-gray-900">
            <div className="px-6 py-10 mx-auto grid lg:py-16">
                <div className="pr-8">
                    <div className="mx-auto">
                        <h2 className="text-6xl text-center font-bold tracking-tight sm:text-4xl">Let us work for
                            you</h2>
                        <p className="mt-4 text-lg text-gray-800">
                            We’d love to hear from you! Send us a message using this form.
                        </p>
                        <form action="#" method="POST"
                              className="mt-4 grid grid-cols-1 gap-y-6 grid-cols-2 gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <span id="last-name-option" className="text-sm text-gray-500">
                                Optional
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Home address or Town
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                autoComplete="address"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>

                        </div>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                aria-describedby="phone-description"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex justify-between">
                            <label htmlFor="how-can-we-help"
                                   className="block text-sm font-medium text-gray-700">
                                How can we help you?
                            </label>
                            <span id="how-can-we-help-description" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                        </div>
                        <div className="mt-1">
                  <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      defaultValue={''}
                  />
                        </div>
                    </div>
                    <fieldset className="sm:col-span-2">
                        <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                        <div className="mt-4 grid grid-cols-2 gap-y-4">
                            <div className="flex items-center">
                                <input
                                    id="budget-under-500"
                                    name="budget"
                                    defaultValue="under_500"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                                />
                                <label htmlFor="budget-under-500" className="ml-3">
                                    <span className="block text-sm text-gray-700">Less than $500</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="budget-1k-2k"
                                    name="budget"
                                    defaultValue="1k-2k"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                                />
                                <label htmlFor="budget-1k-2k" className="ml-3">
                                    <span className="block text-sm text-gray-700">$500 – $1000</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="budget-500-1000"
                                    name="budget"
                                    defaultValue="500-1000"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                                />
                                <label htmlFor="budget-500-1000" className="ml-3">
                                    <span className="block text-sm text-gray-700">$1k – $2K</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="budget-over-2k"
                                    name="budget"
                                    defaultValue="over_2k"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                                />
                                <label htmlFor="budget-over-2k" className="ml-3">
                                    <span className="block text-sm text-gray-700">$2K+</span>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="sm:col-span-2">
                        <label htmlFor="how-did-you-hear-about-us"
                               className="block text-sm font-medium text-gray-700">
                            How did you hear about us?
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="how-did-you-hear-about-us"
                                id="how-did-you-hear-about-us"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="text-right mt-6 sm:col-span-2">
                        <button
                            type="submit"
                            value="Send Email"
                            action="mailto:grindingwoodchuck@gmail.com"
                            className="inline-flex opacity-90 justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >Submit
                        </button>
                    </div>
                </div>


            </div>

        </div>

    </>)
}





