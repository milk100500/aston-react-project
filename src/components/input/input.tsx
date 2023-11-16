import { memo } from "react";

import styles from "./input.module.scss";

interface InputInterface {
    typeProp: string;
    placeholderProp: string;
}

const Input = memo(({ typeProp, placeholderProp }: InputInterface) => {
    return (
        <input
            className={styles.input}
            type={typeProp}
            placeholder={placeholderProp}
        />
    );
});

export default Input;
