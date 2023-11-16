import Form from "../../components/form/form";
import { publicPath } from "../../commonVariables";

import styles from "./login.module.scss";

const Login = () => {
    const videoPath = publicPath + "/assets/video/the_wolf_of_wall_street.mp4";

    return (
        <div className={styles.content}>
            <div className={styles.video}>
                <video
                    className={styles.video__content}
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
