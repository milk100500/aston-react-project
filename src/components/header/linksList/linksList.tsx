import { Link } from "react-router-dom";

import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

const LinksList = () => {
    const { isAuth, handleLogout } = useFirebaseAuth();

    return (
        <>
            {isAuth && (
                <>
                    <Link className="nav__list-link" to="/favorites">
                        Favorites
                    </Link>
                    <Link className="nav__list-link" to="/history">
                        History
                    </Link>
                    <button className="nav__list-logout" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </>
    );
};

export default LinksList;