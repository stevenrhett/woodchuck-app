import React from 'react';
import Avatar from "/src/assets/Avatar.svg";

const people = [{
    name: 'Richard Mooney', role: 'Owner',

}, {
    name: 'Timothy Lentini', role: 'Owner',

}, {
    name: 'Steven Johnson', role: 'IT Department',

}, {
    name: 'New Hire', role: 'Utility Worker',

},];

export default function Staff() {
    return (
        <div className="max-w-2xl mx-auto rounded-md shadow-md">
        <div className="bg-gray-900">
            <div className="mx-auto max-w-2xl py-6 px-6 lg:px-8 lg:py-8">
                <div className="space-y-4">
                    <div className="space-y-5 sm:space-y-4  lg:max-w-3xl">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">Meet
                            our
                            team</h2>
                        <p className="text-xl text-center text-gray-100">
                            Our team is dedicated to our clients.
                        </p>
                    </div>
                    <ul role="list"
                        className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 ">
                        {people.map((person) => (<li key={name.name}
                                                     className="rounded-md bg-gray-700 py-10 px-6 text-center lg:px-10">
                            <div className="space-y-6 lg:space-y-10">
                                <div className="space-y-2 lg:flex lg:items-center lg:justify-between">
                                    <div className="space-y-1 text-lg font-medium leading-6">
                                        <img src={Avatar} className="justify-center h-30 w-auto rounded-full"
                                             alt="avatar"/>
                                        <span className="lg:text-center  text-gray-100">{person.name}</span>
                                        <p className="text-indigo-400">{person.role}</p>
                                    </div>
                                </div>
                            </div>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}

