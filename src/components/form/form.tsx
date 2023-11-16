import Input from "../input/input";

import "./form.scss";

const Form = () => {
    return (
        <div className="form">
            <h1>Login</h1>
            <span className="form__error"></span>
            <Input typeProp={"text"} placeholderProp="Username" />
            <Input typeProp={"password"} placeholderProp="Password" />
            <input className="form__send_login" type="submit" value="Login" />
        </div>
    );
};

export default Form;
