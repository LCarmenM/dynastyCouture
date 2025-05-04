import React from 'react';
import { Link } from 'react-router-dom';

// Button variants
const VARIANTS = {
  primary: 'bg-primary-800 text-white hover:bg-primary-700',
  secondary: 'bg-white border border-primary-800 text-primary-800 hover:bg-primary-50',
  accent: 'bg-accent-light text-white hover:bg-accent-light/90',
  gold: 'bg-accent-gold text-white hover:bg-accent-gold/90',
};

// Button sizes
const SIZES = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4',
  lg: 'py-3 px-6 text-lg',
};

/**
 * Reusable Button component
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='md'] - Button size
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.to] - Route path if button should be a Link
 * @param {boolean} [props.fullWidth] - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type='button'] - Button type attribute
 * @param {boolean} [props.disabled] - Whether button is disabled
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) => {
  // Base button classes
  const baseClasses = 'inline-block rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;
  
  // If "to" prop is provided, render as Link, otherwise as button
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;