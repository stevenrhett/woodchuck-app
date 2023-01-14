import React from 'react';
import {TownList} from "./towns.jsx";
import Footer from "./footer.jsx";
import TownMap from "./townMap.jsx";

let towns = [{town: 'Abington'}, {town: 'Braintree'}, {town: 'Canton'}, {town: 'Carver'}, {town: 'Cohasset'}, {town: 'Duxbury'}, {town: 'Halifax'}, {town: 'Hanson'}, {town: 'Hanover'}, {town: 'Hingham'}, {town: 'Holbrook'}, {town: 'Hull'}, {town: 'Marshfield'}, {town: 'Milton'}, {town: 'Norwell'}, {town: 'Pembroke'}, {town: 'Plympton'}, {town: 'Quincy'}, {town: 'Randolph'}, {town: 'Rockland'}, {town: 'Scituate'}, {town: 'Weymouth'}, {town: 'Whitman'},];
function contentSection() {

    return (<div className="relative overflow-hidden bg-gray-800 py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
            <div className="relative mx-auto h-full max-w-prose text-white text-lg" aria-hidden="true">
                <svg
                    className="absolute top-12 left-full translate-x-32 transform"
                    width={804}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                  fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                </svg>

            </div>
        </div>
        <figure>
            <img
                className="w-full rounded-lg mt-6"
                src="https://i.imgur.com/Yil38mI.png"
                alt="photo of Woodchuck Stump Grinding grinding down a large stump to ground level."
                width={1310}
                height={873}
            />
        </figure>
        <TownMap />
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto min-w-prose text-lg">
                <h1>
                        <span
                            className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Service Area
                        </span>
                </h1>
            </div>
            <div
                className="prose prose-lg prose-indigo -mb-10 mt-4 text-white">

                <ul className="text-white text-center columns-3 -ml-16 -mx-2 -my-2 ">
                    <TownList towns={towns}/>
                </ul>
            </div>


        </div>
        {/*<Footer/>*/}
    </div>)
}
export default contentSection;






