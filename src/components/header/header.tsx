import { Link } from "react-router-dom";

import { publicPath } from "../../commonVariables";
import { useAuth } from "../../hooks/useAuth";

import LinksList from "./linksList/linksList";
import "./header.scss";

const Header = () => {
    const { isAuth } = useAuth();
    const logoPath = publicPath + "/assets/images/logo.svg";

    return (
        <header className="header">
            <div className="header__container container">
                <Link className="header__logo" to="/">
                    <img className="header__logo-img" src={logoPath} alt="logo" />
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
