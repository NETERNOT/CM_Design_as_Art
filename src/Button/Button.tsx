import React from "react";
import "./Button.css";

interface ButtonProps {
  action: () => void;
  label: string;
  isdisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ action, label, isdisabled }) => {
  return (
    <button
      onClick={action}
      className="button"
      disabled={isdisabled} // 👈 Disable the button when true
    >
      {label}
    </button>
  );
};

export default Button;