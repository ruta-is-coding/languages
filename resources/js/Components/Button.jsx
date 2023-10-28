import { Link } from "@inertiajs/react";

const Button = ({ title, link }) => {
    return (
        <button className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-3 rounded-lg transition ease-in-out duration-150">
            <Link
                href={link}
                className="text-white font-bold hover:text-white text-base md:text-lg"
            >
                {title}
            </Link>
        </button>
    );
};

export default Button;
