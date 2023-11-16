import { Link } from "react-router-dom";

import { publicPath } from "../../commonVariables";

import styles from "./header.module.scss";

const Header = () => {
    const logoPath = publicPath + "/assets/images/logo.png";

    return (
        <header className={styles.header}>
            <div className={styles.header__container + " container"}>
                <Link className="" to="/">
                    <img
                        className={styles.header__logo}
                        src={logoPath}
                        alt="logo"
                    />
                </Link>
                <Link className={styles.header__pedro} to="/login">
                    Login
                </Link>
            </div>
        </header>
    );
};

export default Header;
