import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);