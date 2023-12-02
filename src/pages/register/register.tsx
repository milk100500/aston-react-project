import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";
import { userData } from "../../store/auth/authSelector";
import "./register.scss";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

const Register = () => {
    const videoPath = publicPath + "/assets/video/BackgroundVideo.mp4";
    const { email, setEmail, password, setPassword, isAuth, handleRegister } = useFirebaseAuth();
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
                handleSubmit={handleRegister}
                authData={authData}
                formType="Register"
            />
        </div>
    );
};

export default Register;