import stumps from '/src/assets/noto_wood.svg';
import {TownList} from "../section/Towns.jsx";
import React from "react";



const towns = [{town: 'Abington'}, {town: 'Braintree'}, {town: 'Canton'}, {town: 'Carver'}, {town: 'Cohasset'}, {town: 'Duxbury'}, {town: 'Halifax'}, {town: 'Hanson'}, {town: 'Hanover'}, {town: 'Hingham'}, {town: 'Holbrook'}, {town: 'Hull'}, {town: 'Marshfield'}, {town: 'Milton'}, {town: 'Norwell'}, {town: 'Pembroke'}, {town: 'Plympton'}, {town: 'Quincy'}, {town: 'Randolph'}, {town: 'Rockland'}, {town: 'Scituate'}, {town: 'Weymouth'}, {town: 'Whitman'},];

function getTowns() {
    return towns;
}

const Footer = () => {

    return (
        <div className="bg-white">
            <footer className="bg-primary" aria-labelledby="footer">
                <h2 id="footer" className="sr-only">
                    Footer</h2>
                <div className="py-6">
                    <div className="px-6">
                <div className="mx-auto  sm:max-w-sm">
                    <div className="mx-auto min-w-prose text-lg">
                        <h1 className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Service Area
                        </h1>
                    </div>
                    <div className="prose prose-lg prose-indigo mt-4 text-white">
                        <ul className="text-white text-center columns-3 -ml-16 -mx-2 -my-2 ">
                            <TownList towns={getTowns()} />
                        </ul>
                    </div>

                    <div className="mt-8 border-t border-gray-500 pt-8">
                        <div className="grid grid-cols-2 mt-0">
                            <img
                                className="h-24 w-24 "
                                src={stumps}
                                alt="cartoon stump"/>
                            <div className="text-base text-gray-300 xl:text-center">
                            <span className="block uppercase tracking-wide text-white">
                       7816501119</span>
                                <span className="block uppercase tracking-wide text-white">
                        grindingwoodchuck@gmail.com
                    </span>
                                <span className="block uppercase tracking-wide text-white">
                         &copy;  Woodchuck Stump Grinding Weymouth, MA 02191
                     </span>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default Footer;