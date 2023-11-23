import { MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";
import { userData } from "../../store/auth/authSelector";

import "./login.scss";
import { AppDispatch } from "../../store";
import { setError, setUser } from "../../store/auth/authSlice";

const Login = () => {
    const authData = useSelector(userData);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const videoPath = publicPath + "/assets/video/the_wolf_of_wall_street.mp4";
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit: MouseEventHandler<HTMLInputElement> = (e) => {  
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

                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;

                dispatch(setError(errorMessage));
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
                formType="Login"
            />
        </div>
    );
};

export default Login;
