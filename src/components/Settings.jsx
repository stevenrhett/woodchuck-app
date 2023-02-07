import React from 'react';
import {NavLink} from "react-router-dom";

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <NavLink to={"/.."} className="btn btn-outline btn-warning">Back</NavLink>

        </div>
    );
};

export default Settings;