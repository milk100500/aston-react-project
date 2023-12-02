import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { AppDispatch } from "../store";
import { removeUser, setError, setUser } from "../store/auth/authSlice";

export const useFirebaseAuth = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    })
                );
                setIsAuth(true);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(setError(errorMessage));
            });
    };

    const handleLogout = () => {
        const auth = getAuth();
        auth.signOut()
            .then(() => {
                dispatch(removeUser());
                setIsAuth(false);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(setError(errorMessage));
            });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    })
                );
                setIsAuth(true);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(setError(errorMessage));
            });
    };

    useEffect(() => {
        const auth = getAuth();
        if (auth.currentUser) {
            setIsAuth(true);
        }
    }, []);

    return {
        email,
        setEmail,
        password,
        setPassword,
        isAuth,
        handleLogin,
        handleLogout,
        handleRegister,
    };
};