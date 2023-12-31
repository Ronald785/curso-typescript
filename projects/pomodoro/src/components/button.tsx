import React from "react";

interface Props {
    text: string;
    onClick?: () => void;
    className?: string;
}

export default function Button(props: Props) {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.text}
        </button>
    );
}
