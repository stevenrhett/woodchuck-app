import React from 'react';
import BeeKind from '/Users/admin/woodchuck-app/src/assets/bee-kind-error-page.svg';


export default function NotFound() {
    return (

        <div className="min-h-full bg-gray-800 py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max ">
                <main className="sm:flex ">
                    <p className="text-4xl text-center mr-10 font-bold tracking-tight text-yellow-200 sm:text-5xl">404</p>
                    <div className="-m-10">
                        <div className="sm:border-l content-center sm:border-gray-200 sm:pr-6 ">
                            <img src={BeeKind} alt="Bee Kind"/>
                            <button
                                className="btn btn-sm md:btn-md lg:btn-lg ml-32 sm:ml-28 xs:ml-16 bg-yellow-200 text-black  mt-4 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Woodchuck Home
                            </button>
                        </div>

                    </div>
                </main>
            </div>

        </div>)
    ;
}
