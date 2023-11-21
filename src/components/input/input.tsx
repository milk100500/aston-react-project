import { memo } from "react";

import "./input.scss";

interface InputInterface {
    typeProp: string;
    placeholderProp: string;
    valueProp: string;
    setValue: (value: string) => void;
}

const Input = memo(({ typeProp, placeholderProp, valueProp, setValue }: InputInterface) => {
    return (
        <input
            className="input"
            type={typeProp}
            placeholder={placeholderProp}
            value={valueProp}
            onChange={(e)=>setValue(e.target.value)}
        />
    );
});

export default Input;
