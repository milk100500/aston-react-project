import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";

import "./login.scss";

const Login = () => {
    const videoPath = publicPath + "/assets/video/the_wolf_of_wall_street.mp4";

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
            <Form />
        </div>
    );
};

export default Login;
