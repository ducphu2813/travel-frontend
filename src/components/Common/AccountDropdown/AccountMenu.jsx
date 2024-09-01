
import './AccountMenu.css';
import React, { useState } from "react";
import {Link} from "react-router-dom";

const AccountMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (event) => {
        if (!event.target.closest('.account-menu')) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="account-menu">
            <button className="account-button" onClick={toggleDropdown}>
                <img src="../../../assets/user.png" alt="" /> Tài khoản ▼
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <Link className="login-btn" to="/login">Đăng nhập</Link>
                    <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link> ngay</p>
                </div>
            )}
        </div>
    )
}

export default AccountMenu;