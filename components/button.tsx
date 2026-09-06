import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  leftIcon,
  rightIcon,
  leftIconClassName = "",
  rightIconClassName = "",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-3 px-4 text-sm font-medium transition-all duration-200 cursor-pointer ${className}`}
      {...props}
    >
      {leftIcon && (
        <span
          className={`flex items-center justify-center shrink-0 ${leftIconClassName}`}
        >
          {leftIcon}
        </span>
      )}

      {text && <span className="text-[18px]">{text}</span>}
      {children}

      {rightIcon && (
        <span
          className={`flex items-center justify-center shrink-0 ${rightIconClassName}`}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
