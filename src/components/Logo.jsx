import React from 'react';
import {Link} from 'react-router-dom';

export default function Logo() {
    return (
        <div className="logo-box">
            <Link to="/">
                <img src="img/mems-world.png" alt="Logo" className="logo"/>
            </Link>
        </div>
    );
}