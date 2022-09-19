import React from "react";
import { buttonStyle } from "./Button.css";

interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={buttonStyle} {...props}>
      {children}
    </button>
  );
};
