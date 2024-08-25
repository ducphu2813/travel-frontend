
import './AccountMenu.css';
import React, { useState } from "react";

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
                <img src="./user.png" alt="" /> Tài khoản ▼
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <button className="login-btn">Đăng nhập</button>
                    <p>Chưa có tài khoản? <a href="#">Đăng ký</a> ngay</p>
                </div>
            )}
        </div>
    )
}

export default AccountMenu;