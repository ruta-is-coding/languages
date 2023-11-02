export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-rose-200 text-rose-700 focus:ring-rose-700" +
                className
            }
        />
    );
}
