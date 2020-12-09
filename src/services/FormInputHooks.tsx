import { useState, ChangeEventHandler } from "react";

interface ResetFunction {
    (): void;
}

// Generic Interface to return the value and onChange handler for button
interface Bind<T> {
    value: T;
    onChange: ChangeEventHandler<any>;
}

// Custom Hook
export function useInput<T>(initialValue: T): [T, Bind<T>, ResetFunction] {
    const [value, setValue] = useState<T>(initialValue);

    const reset = () => {
        setValue(initialValue);
    };

    const bind: Bind<T> = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    };

    return [value, bind, reset];
}
