import React from 'react';
import {NavLink} from "react-router-dom";

const Stumps = () => {
    return (
        <div>
            <h1>Stumps</h1>
            <NavLink to={"/.."} className="btn btn-outline btn-warning">Back</NavLink>
        </div>
    );
};

export default Stumps;