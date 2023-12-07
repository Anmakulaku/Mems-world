import React from 'react';
import {Link} from 'react-router-dom';
import memsWorld from '../assets/memsWorld.png';

export default function Logo() {
    return (
        <div className="logo-box">
            <Link to="/">
                <img src={memsWorld} alt="Logo" className="logo"/>
            </Link>
        </div>
    );
}