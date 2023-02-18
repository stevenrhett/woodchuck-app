import React from 'react';
import TimAtWork from "/public/assets/timatwork.png"


export default function Hero() {


    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48"
                             src={TimAtWork} alt="Tim At Work"/>
                    </div>
                    <div className="p-8">
                        <div
                            className="brightness-200 rounded w-fit px-2 py-2 uppercase  sm:text-sm text-lg text-slate-900  bg-gray-500 ring-1 ring-inset ring-white">
                            <a href="sms:(1)(7816501119)"> Send Text Message</a>
                            <span> 📱</span>
                        </div>
                        <a className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                            Woodchuck Stump Grinding
                        </a>
                        <p className="mt-2 text-slate-500">
                            Say goodbye to unsightly stumps and hello to a beautiful landscape - trust our expert stump
                            grinding services to get the job done!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}












