import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";
import { userData } from "../../store/auth/authSelector";

import "./register.scss";
import { AppDispatch } from "../../store";
import { setError, setUser } from "../../store/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
    const videoPath = publicPath + "/assets/video/BackgroundVideo.mp4";

    const { isAuth } = useAuth();
    const authData = useSelector(userData);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    const handleSubmit: MouseEventHandler<HTMLInputElement> = (e) => {   
        e.preventDefault(); 
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid
                    })
                );

                navigate("/");
            })
            .catch((error) => {    
                dispatch(setError(error.message));
            });
    };

    return (
        <div className="content">
            <div className="video">
                <video
                    className="video__content"
                    src={videoPath}
                    autoPlay
                    muted
                    loop
                />
            </div>
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                authData={authData}
                formType="Register"
            />
        </div>
    );
};

export default Register;
