import { Link } from "react-router-dom";
import { useContext } from "react";

import { publicPath } from "../../commonVariables";
import { useAuth } from "../../hooks/useAuth";

import { CollapseContext } from "../../context/collapseProvider";

import LinksList from "./linksList/linksList";

import "./header.scss";

const Header = () => {
    const { isAuth, isLoading } = useAuth();
    const logoPath = publicPath + "/assets/images/logo.svg";
    const gifPath = publicPath + "/assets/images/loading.gif";
    const { collapsed, switchCollapse } = useContext(CollapseContext);

    return (
        <header className="header">
            <div className="header__container container">
                <Link className="header__logo" to="/">
                    <img className="header__logo-img" src={logoPath} alt="logo" />
                </Link>
                <nav className="header__nav">
                    <img className="header__nav-arrow" 
                        onClick={switchCollapse} 
                        style={collapsed ? { transform: "rotateY(0deg)" } : { transform: "rotateY(180deg)" }}
                        src={publicPath + "assets/images/arrow.svg"} 
                        alt="arrow nav"
                    />
                    <ul className="nav__list" style={collapsed ? { display: "flex" } : { display: "none" }}>
                        {isLoading ? (
                            isAuth ? (
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
                            )
                        ) : (
                            <img className="header__loader" src={gifPath} alt="gif loader" />
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
