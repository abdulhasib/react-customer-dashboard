// component/Button
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  type?: string;
  className?: string;
  to?: string;
  px?: string;
  onClick?: any;
  disabled?: boolean;
  children?: any;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({ type, className, to, onClick, disabled, children, px }) => {
    const classes = `
    button relative inline-flex interms-center items-center h-11 ${
      disabled ? 'text-zinc-950' : 'transition-colors hover:text-color-1'
    } ${px || 'px-7'} text-n-1'
    ${className || ''}`;

    const spanClasses = 'inline-flex items-center';

    const renderButton = () => (
      <button className={classes} onClick={onClick} disabled={disabled}>
        <span className={spanClasses}>{children}</span>
      </button>
    );

    const renderLink = () => (
      <Link to={to} className={classes}>
        <span className={spanClasses}>{children}</span>
      </Link>
    );

    return type === 'link' ? renderLink() : renderButton();
  }
);

export default Button;
