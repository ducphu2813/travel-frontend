import {Link} from "react-router-dom";
import "./Navbar.css";
import AccountMenu from "../../Common/AccountDropdown/AccountMenu.jsx";

export const Navbar = () => {
    return(
        <div className="nav">
            <div className="navbar-header">
                Logo
            </div>

            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Tour</Link>
                </li>
                <li className="nav-item">
                    <Link to="/attractions">Vé vui chơi</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resorts">Resort</Link>
                </li>
                <li className="nav-item">
                    <Link to="/flights">Vé máy bay</Link>
                </li>
            </ul>

            <AccountMenu />
        </div>
    )
}