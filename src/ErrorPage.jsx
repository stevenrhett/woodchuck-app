import React from 'react';

const ErrorPage = () => {
    return (<div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md md:max-w-2xl">

        <div className="text-center w-full h-full mt-24">
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p>Something went wrong</p>
            <p>Please try again</p>
            <p>If the problem persists, please</p>
            <a className="text-lg text-blue-500 hover:text-blue-600" href="mailto:someone@example.com">Contact Us</a>

        </div>
    </div>);
};

export default ErrorPage;