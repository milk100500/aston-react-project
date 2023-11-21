import { useSelector } from "react-redux";

import { userData } from "./../store/auth/authSelector";

export function useAuth() {
    const { email, id, token } = useSelector(userData);

    return {
        id,
        isAuth: !!email,
        email,
        token,
    };
}