import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";
import { userData } from "../../store/auth/authSelector";
import "./login.scss";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

const Login = () => {
    const videoPath = publicPath + "/assets/video/BackgroundVideo.mp4";
    const { email, setEmail, password, setPassword, isAuth, handleLogin } = useFirebaseAuth();
    const authData = useSelector(userData);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    return (
        <div className="content">
            <div className="video">
                <video className="video__content" src={videoPath} autoPlay muted loop />
            </div>
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleLogin}
                authData={authData}
                formType="Login"
            />
        </div>
    );
};

export default Login;