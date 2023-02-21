import React from 'react';
import TimAtWork from "./assets/timatwork.png"


export default function Hero(divVisible) {

    return (
        <>
            <div className="max-w-7xl bg-white mx-auto rounded-md">
                {divVisible && <div>
                    <div className="md:flex bg-base-100">
                        <div className="md:shrink-0">
                            <img className="h-fit rounded bg-base w-fit overflow-hidden mx-auto object-cover"
                                 src={TimAtWork} alt="Tim At Work"/>
                        </div>
                        <div className="py-6 flex flex-col">
                            <div>
                                <p className="flex-1 brightness-200 rounded  mx-auto px-2 py-2  w-40 lg:w-48 uppercase  sm:text-sm text-lg text-slate-900  bg-gray-500 ring-1 ring-inset ring-white">
                                    <a href="sms:(1)(7816501119)">Text Message</a>
                                    <span> 📱</span></p>
                            </div>
                            <div>
                                <p className="flex brightness-200 rounded  mx-auto px-2 py-2  w-40 lg:w-48 uppercase  sm:text-sm text-lg text-slate-900  bg-gray-500 ring-1 ring-inset ring-white">
                                    <a href="tel:+17816501119">Call Now</a>
                                    <span className="ml-9">📞</span></p>
                            </div>
                            <a className="block mt-1 text-2xl lg:text-4xl text-center mx-auto leading-tight font-medium text-black hover:rounded-lg hover:bg-base-200 hover:animate-pulse">
                                Woodchuck Stump Grinding
                            </a>
                            <p className="mt-2 mx-auto text-center text-slate-500 max-w-md">
                                Say goodbye to unsightly stumps and hello to a beautiful landscape - trust our expert
                                stump
                                grinding services to get the job done!
                            </p>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}












