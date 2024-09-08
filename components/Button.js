import React from "react";

export default function Button({
    children,
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className="text-white py-3 px-8 rounded-full my-4 cursor-pointer bg-violet-500 hover:bg-violet-600"
        >
            {children}
        </div>
    );
}
