import timatwork from "./assets/timatwork.png";
import React from "react";


export default function Dashboard() {
    const clickHandler = () => {
        console.log("clicked");
    }
    return (<div className="bg-gray-800">
        <div className="container  mx-auto sm:px-6 bg-gray-800 lg:px-8 bg-gray-800">
            <header className="py-10 bg-gray-800">
                <div className="mx-auto bg-gray-800 max-w-7xl px-4 sm:px-6 bg-gray-800 lg:px-8 bg-gray-800">
                    <h1 className="text-3xl bg-gray-800 text-center font-bold tracking-tight text-white">Woodchuck Stump
                        Grinding</h1>
                </div>
            </header>
            <main className="-mt-32 bg-gray-800 border border-gray-800">
                <div
                    className="mx-auto bg-gray-800 border border-gray-800 max-w-7xl px-4 pb-12 sm:px-6 bg-gray-800 lg:px-8">
                    <div className="bg-gray-800">
                        <img className="rounded-lg h-full w-full mt-6 mb-6 border border-white" src={timatwork}
                             alt="Tim with the bandit machine digging a hole."/>
                        <div className="flex flex-col items-center">
                            <p className="mt-4 text-center text-lg leading-6 text-white sm:mt-6 bg-gray-800">
                                <span className="mt-2 mb-4 block text-center text-xl text-white font-medium">
                                Call us today we can beat their price!
                                    <p className="font-bold text-2xl">Call Now</p>
                                </span>
                            </p>
                            <button onClick={clickHandler}
                                    className="btn glass text-center font-large just-items-center">
                                <a href="tel:7816501119"><b>781-650-1119</b></a>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>)
}






