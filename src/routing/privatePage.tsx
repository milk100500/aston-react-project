import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { Loader } from "../components/loader/loader";

function PrivatePage() {
    const { isAuth, isLoading } = useAuth();

    if (!isLoading) {
        return <Loader />;
    }
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivatePage;