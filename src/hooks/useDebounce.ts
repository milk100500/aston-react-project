import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number): string => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timerId);
        };
    }, [value, delay]);

    return debouncedValue;
};

