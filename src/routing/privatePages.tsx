import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

function PrivateOutlet() {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export {PrivateOutlet};