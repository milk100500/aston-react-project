import { Link } from "react-router-dom";

import { publicPath } from "../../commonVariables";

import "./header.scss";
import LinksList from "./linksList/linksList";

const Header = () => {
    const isAuth = false;
    const logoPath = publicPath + "/assets/images/logo.png";

    return (
        <header className="header">
            <div className="header__container container">
                <Link className="" to="/">
                    <img className="header__logo" src={logoPath} alt="logo" />
                </Link>
                <nav className="header__nav">
                    <ul className="nav__list">
                        {isAuth ? (
                            <LinksList />
                        ) : (
                            <>
                                <Link className="nav__list-link" to="/login">
                                    Login
                                </Link>
                                <Link className="nav__list-link" to="/register">
                                    Register
                                </Link>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
