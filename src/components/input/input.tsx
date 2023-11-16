import { memo } from "react";

import "./input.scss";

interface InputInterface {
    typeProp: string;
    placeholderProp: string;
}

const Input = memo(({ typeProp, placeholderProp }: InputInterface) => {
    return (
        <input
            className="input"
            type={typeProp}
            placeholder={placeholderProp}
        />
    );
});

export default Input;
