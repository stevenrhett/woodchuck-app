import React from "react"

const files = [{
    title: 'Work',
    id: 1,
    source: ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_161746(1).jpeg/:/cr'
}, {
    title: 'Boston',
    id: 2,
    source: ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_123622.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true'
}, {
    title: 'Quincy',
    id: 3,
    source: 'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_153612.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
}, {
    title: 'Weymouth',
    id: 4,
    source: 'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_115350.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
},

    {
        title: 'Plymouth',
        id: 5,
        source: ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_161746(1).jpeg/:/cr '
    }, {
        title: 'Brockton',
        id: 6,
        source: ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_123622.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true'
    }, {
        title: 'Whitman',
        id: 7,
        source: 'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_153612.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    }, {
        title: 'Weymouth',
        id: 8,
        source: 'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_115350.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    },]

export default function Stumps() {
    return (<div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">

        <div className="carousel-item">

            <img src={files[0].source} className="w-full h-full object-cover" alt=""/>

        </div>

        <div
            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className=" btn btn-circle">❯</a>
        </div>


    </div>)
}














