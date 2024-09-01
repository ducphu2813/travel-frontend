import React from 'react';
import './AdmNavBar.css';

const AdmNavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" href="/admin/tour">Quản lý tour</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/flight">Quản lý vé máy bay</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/resort">Quản lý resort</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin/attraction">Quản lý vé khu vui chơi</a>
            </li>
        </ul>
    )
}

export default AdmNavBar;