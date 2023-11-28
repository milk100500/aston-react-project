import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

import { AppDispatch } from "../../../store";
import { removeUser } from "../../../store/auth/authSlice";

const LinksList = () => {
    const dispatch: AppDispatch = useDispatch();
    const auth = getAuth();

    const handleClick = () => {
        dispatch(removeUser());
        signOut(auth);
    };
      
    return (
        <>
            <Link className="nav__list-link" to="/favorites">
                Favorites
            </Link>
            <Link className="nav__list-link" to="/history">
                History
            </Link>
            <button className="nav__list-logout" onClick={handleClick}>Logout</button>
        </>
    );
};

export default LinksList;
