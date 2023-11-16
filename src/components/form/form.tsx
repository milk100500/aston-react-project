import Input from "../input/input";

import styles from "./form.module.scss";

const Form = () => {
    return (
        <div className={styles.form} id="form">
            <h1>Login</h1>
            <span className={styles.form__error}></span>
            <Input typeProp={"text"} placeholderProp="Username" />
            <Input typeProp={"password"} placeholderProp="Password" />
            <input
                className={styles.form__send_login}
                type="submit"
                value="Login"
            />
        </div>
    );
};

export default Form;
