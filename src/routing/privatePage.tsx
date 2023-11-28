import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

function PrivatePage() {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivatePage;