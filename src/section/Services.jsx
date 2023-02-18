import React from 'react';


export default function Services() {

    return (
        <div className="bg-slate-800 ">
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-12 px-4 sm:px-6 s lg:max-w-2xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
                    </h2>
                    <p className="mt-4 text-white dark:text-gray-900">
                        Overall, while there may be some situations where complete stump removal is the best option,
                        stump grinding is generally considered to be a more practical, cost-effective, and aesthetically
                        pleasing option for most homeowners and landscapers
                    </p>
                </div>
                <div className="gap-8">
                    <img
                        src="https://i.imgur.com/4k3JmG9.png"
                        className="rounded-lg bg-gray-100"
                        alt="alt"
                    />

                </div>
            </div>
        </div>
    )
}


