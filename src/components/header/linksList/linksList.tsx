import { Link } from "react-router-dom";

const LinksList = () => {
    return (
        <>
            <Link className="nav__list-link" to="/favorites">
                Favorites
            </Link>
            <Link className="nav__list-link" to="/history">
                History
            </Link>
            <button className="nav__list-logout">Logout</button>
        </>
    );
};

export default LinksList;
