import React from "react";
import "./Button.css";

interface ButtonProps {
  action?: () => void;
  label: string;
  isdisabled?: boolean;
  negative?: boolean;
}

const Button: React.FC<ButtonProps> = ({ action, label, isdisabled, negative }) => {
  return (
    <button
      onClick={action}
      className={`button-container ${negative ? "negative" : ""}`}
      disabled={isdisabled} // 👈 Disable the button when true
    >
      {label}
    </button>
  );
};

export default Button;