import React from 'react';
import {Link} from "react-router-dom";


const files = [
    {
        title: 'Work',
        id: 1,
        source:
            ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_161746(1).jpeg/:/cr'
    },
    {
        title: 'Boston',
        id: 2,
        source:
            ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_123622.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true'
    },
    {
        title: 'Quincy',
        id: 3,
        source:
            'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_153612.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    },
    {
        title: 'Weymouth',
        id: 4,
        source:
            'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_115350.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    },

    {
        title: 'Plymouth',
        id: 5,
        source:
            ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_161746(1).jpeg/:/cr '
    },
    {
        title: 'Brockton',
        id: 6,
        source:
            ' https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_123622.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true'
    },
    {
        title: 'Whitman',
        id: 7,
        source:
            'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220514_153612.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    },
    {
        title: 'Weymouth',
        id: 8,
        source:
            'https://img1.wsimg.com/isteam/ip/bb7c43a1-5fb1-48cd-8f08-37327b4f7a53/Resized_Resized_20220526_115350.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:540,cg:true '
    },
]

export default function Stumps() {
    return (<>
            <Link to={"/.."} className="btn btn-outline btn-warning">Back</Link>
            <div className="mt-6 rounded-md p-4 grid grid-cols-2 sm:grid-cols-1 sm:gap-x-4 lg:grid-cols-4 ">
                {files.map(file => (
                    <div key={file.id}>
                        {/*<h1 className="text-primary font-bold pointer-events-none text-center mt-2 block truncate">{file.title}</h1>*/}
                        <img src={file.source} alt={file.title}
                             className="p-1 mx-auto justify-around rounded-md"/>
                    </div>
                ))}
            </div>
        </>

    )
}

