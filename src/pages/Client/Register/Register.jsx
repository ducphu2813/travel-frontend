import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    return (
        <div className="addUser">
            <h3>Đăng Ký</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="name">Họ và Tên:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        placeholder="Nhập Họ và Tên của bạn"
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Nhập Email của bạn"
                    />
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Nhập mật khẩu của bạn"
                    />
                    <button type="submit" className="btn btn-success mt-5">
                        Đăng Ký
                    </button>
                </div>
            </form>
            <div className="login">
                <p>Đã có tài khoản? </p>
                <Link to="/login" type="submit" class="btn btn-primary">
                    Chuyển sang Đăng nhập
                </Link>
            </div>
        </div>
    );
};

export default Register;