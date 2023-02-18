import React from 'react';

const people = [
    {
        name: 'Richard Mooney',
        role: 'Co-Owner',

    },
    {
        name: 'Timothy Lentini',
        role: 'Co-Owner',

    },
    {
        name: 'Steven Johnson',
        role: 'IT Manager',

    },
    {
        name: 'New Hire',
        role: 'Utility Man',

    },
];

export default function Staff() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-2xl py-6 px-6 lg:px-8 lg:py-12">
                <div className="space-y-4">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">Meet our
                            team</h2>
                        <p className="text-xl text-center text-gray-300">
                            Our team is dedicated to our clients.

                        </p>
                    </div>
                    <ul role="list"
                        className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        {people.map((person) => (
                            <li key={person.name}
                                className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                                <div className="space-y-6 xl:space-y-10">

                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3 className="text-white">{person.name}</h3>
                                            <p className="text-indigo-400">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

