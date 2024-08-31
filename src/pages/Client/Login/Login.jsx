import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="addUser">
            <h3>Đăng Nhập</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="email">Email hoặc Username:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Nhập Email hoặc Username của bạn"
                    />
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Nhập mật khẩu của bạn"
                    />
                    <button type="submit" className="btn btn-primary mt-5">
                        Đăng Nhập
                    </button>
                </div>
            </form>
            <div className="login">
                <p>Chưa có tài khoản? </p>
                <Link to="/register" type="submit" class="btn btn-success">
                    Đăng ký
                </Link>
            </div>
        </div>
    );
};

export default Login;