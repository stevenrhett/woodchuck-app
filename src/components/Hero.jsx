import React from 'react';
import TimAtWork from "../assets/timatwork.png"


export default function Hero() {


    return (
        <>
            <div className="max-w-2xl bg-white mx-auto rounded-md">
                <div className="md:flex bg-base-100">
                    <div className="md:shrink-0">
                        <img className="h-auto rounded bg-base w-fit overflow-hidden mx-auto object-cover"
                             src={TimAtWork} alt="Tim At Work"/>
                    </div>
                    <div className="p-8">
                        <div
                            className="brightness-200 rounded w-fit mx-auto px-2 py-2 uppercase  sm:text-sm text-lg text-slate-900  bg-gray-500 ring-1 ring-inset ring-white">
                            <a href="sms:(1)(7816501119)"> Send Text Message</a>
                            <span> 📱</span>
                        </div>
                        <a className="block mt-1 text-2xl lg:text-4xl text-center mx-auto leading-tight font-medium text-black hover:rounded-lg hover:bg-base-200 hover:animate-pulse">
                            Woodchuck Stump Grinding
                        </a>
                        <p className="mt-2 mx-auto text-center text-slate-500 max-w-xl">
                            Say goodbye to unsightly stumps and hello to a beautiful landscape - trust our expert stump
                            grinding services to get the job done!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}












