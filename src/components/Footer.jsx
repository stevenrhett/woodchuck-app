import stumps from '../assets/noto_wood.svg';
import React from "react";

const towns = [{town: 'Abington', id: 1}, {town: 'Braintree', id: 2}, {town: 'Canton', id: 3}, {
    town: 'Carver', id: 4
}, {town: 'Cohasset', id: 5}, {town: 'Duxbury', id: 6}, {town: 'Halifax', id: 7}, {
    town: 'Hanson', id: 8
}, {town: 'Hanover', id: 9}, {town: 'Hingham', id: 10}, {town: 'Holbrook', id: 11}, {
    town: 'Hull', id: 12
}, {town: 'Marshfield', id: 13}, {town: 'Milton', id: 14}, {town: 'Norwell', id: 15}, {
    town: 'Pembroke', id: 16
}, {town: 'Plympton', id: 17}, {town: 'Quincy', id: 18}, {town: 'Randolph', id: 19}, {
    town: 'Rockland', id: 20
}, {town: 'Scituate', id: 21}, {town: 'Weymouth', id: 22}, {town: 'Whitman', id: 23},];


const Footer = () => {
    return (<>
        <div className="max-w-2xl mx-auto rounded-md shadow-md">

            <footer className="bottom-2 bg-slate-700 footer rounded-md p-1">
                <div
                    className="mx-auto flex flex-wrap items-center justify-between max-w-2xl sm:px-4 lg:px-8">
                    <div className="lg:mb-0 w-full lg:w-6/12 lg:mb-0">

                        <h1 className="mt-6 font-semibold brightness-100 lg:mb-4 block ml-6 text-3xl text-gray-100">
                            Service Area
                        </h1>
                    </div>
                    <div className="w-full lg:w-6/12 lg:text-md">
                        <div className="sm:mb-4 ">
                            <div
                                className="text-gray-100 font-semibold brightness-100 text-center justify-between columns-3">
                                {towns.map((town, id) => {
                                    return (<ul key={id} className="text-gray-100 font-semibold text-center">
                                        <span className="text-sm">{town.town}</span>
                                        <span className="hidden">{town.id}</span>
                                    </ul>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center">

                        <div className="justify-self-center flex flex-col gap-0 lg:gap-4">
                            <img
                                src={stumps}
                                alt="stumps"
                                className="ml-14 w-12 h-12 rounded-full"
                            />
                            <a href="mailto:grindingwoodchuck@gmail.com" className="lg:text-lg text-blue-400 underline">
                                <p className="ml-2 mt-0">Woodchuck Stump Grinding <br/>Weymouth, MA 02191</p></a>
                        </div>
                    </div>

                    <div className="grid-flow-col gap-0 place-self-center justify-self-end text-white">
                        <div className="sm:flex sm:mt-12 lg:flex-row sm:justify-between sm:items-center">
                            <a href="https://www.twitter.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className="sm:m-2 lg:mt-2 fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className="sm:m-2 lg:mt-2 fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className="sm:m-2 lg:mt-2 fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>)
};

export default Footer;






























