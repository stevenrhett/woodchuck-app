import timatwork from "./assets/timatwork.png";
import React, {useRef, useState} from "react";
import phone from "./assets/phone.svg";
import text from "./assets/text-message.svg"
import {Link} from "react-router-dom";

export default function Dashboard() {

    const [, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)
    return (<div className="container">
        <div className="mx-auto sm:px-6 bg-gray-800 lg:px-8">
            <header className="py-10">
                <div className="mx-auto bg-gray-800 max-w-7xl px-4 sm:px-6  lg:px-8">
                    <div className="max-w-0 mx-auto px-4 sm:px-6 lg:px-8">
                    </div>
                </div>
            </header>
            <main className="-mt-32 bg-gray-800 border border-gray-700">

                <div className="mt-12 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3"><img
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    src={timatwork}
                    alt="Tim with the bandit machine digging a hole."/>
                    <div className="mt-4  leading-6  sm:mt-6 ">
                        <p className="text-4xl text-white text-center font- sm:text-4xl">Woodchuck Stump Grinding</p>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                    <button
                        src={phone}
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:text-sm"
                        onClick={() => setOpen(false)}
                    ><a href="tel:7816501119">Call Now</a>

                    </button>
                    <button
                        src={text}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    ><a href="sms:(781)(6501119)"> Text Us
                    </a>
                    </button>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                    <Link to="/reviews">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                            onClick={() => setOpen(false)}
                        >Reviews
                        </button>
                    </Link>
                    <video autoPlay loop muted playsInline
                           className="mt-4 inline-flex w-full mb-4 justify-center rounded-md border border-gray-300 bg-white px-4 py-2  shadow-sm hover:bg-gray-50 focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                           style={{width: '100%'}}>
                        <source src={"https://i.imgur.com/erAsOoq.mp4"} type="video/mp4"
                        />
                    </video>
                </div>
            </main>
        </div>
    </div>);
};








