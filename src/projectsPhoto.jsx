import React from 'react';

export default function ProjectsPhoto() {
    return (<div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content bg-gray-800">
                <div className="flex flex-col items-center bg-gray-800">
                    <div className="w-80 carousel content-center rounded-box">
                        <div className="carousel-item  w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://placeimg.com/256/400/arch" className="w-full"
                                 alt="Tailwind CSS Carousel component"/>
                        </div>
                    </div>
                </div>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/*// <!-- Sidebar content here -->*/}
                    <li><a>Stump Removal</a></li>
                    <li><a>Second Service</a></li>

                </ul>
            </div>
        </div>)
}
