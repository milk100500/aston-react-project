import { MouseEventHandler, memo } from "react";

import Input from "../input/input";
import { UserState } from "../../store/auth/authSlice";

import "./form.scss";

interface FormInterface{
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    handleSubmit: MouseEventHandler<HTMLInputElement>;
    authData: UserState;
    formType: string;
}

const Form = memo(
    ({
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        authData,
        formType
    }: FormInterface) => {
        return (
            <form className="form">
                <h1>{formType}</h1>
                <span className="form__error"></span>
                <Input typeProp={"text"} placeholderProp="Email" valueProp={email} setValue={setEmail} />
                <Input typeProp={"password"} placeholderProp="Password" valueProp={password} setValue={setPassword} />
                <input className="form__send_login" type="submit" value={formType} onClick={handleSubmit}/>
            </form>
        );
    }
);

export default Form;
