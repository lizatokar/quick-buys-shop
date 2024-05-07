import "./Header.css";
import logo from "../../Assets/Images/Logo/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="brandName">
                <img src={logo} alt="segwayLogo"></img>
                <h2>Quick Buys</h2>
            </div>
            <nav>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/catalogue">Catalogue</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </header>
    );
};

export default Header;
