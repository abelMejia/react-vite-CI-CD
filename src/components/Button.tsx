import * as React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
