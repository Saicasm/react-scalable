import type React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disaabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ disaabled, ...props }) => {
    return (
        <button {...props} disabled>
            Click Me
        </button>
    );
}

export default Button;