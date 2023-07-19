import React from "react";
import "./styles/Button.css";

interface ButtonProps {
  url: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ url, label }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button className="customButton" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
