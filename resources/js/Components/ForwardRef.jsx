import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-rose-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500 outline-none" +
                className
            }
            ref={input}
        />
    );
});
