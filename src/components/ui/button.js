import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  variant = 'solid', 
  size = 'lg', 
  children, 
  disabled = false, 
  ...props 
}) => {
  // Base styles for the button
  const baseStyle = "px-4 py-2 font-semibold rounded-md focus:outline-none transition-all duration-300";

  // Conditional styles for different variants and sizes
  const variantStyle = variant === 'outline' ? "border border-gray-300 text-gray-700 hover:bg-gray-100" : "bg-blue-500 text-white hover:bg-blue-600";
  const sizeStyle = size === 'sm' ? "text-sm" : "text-lg";

  // Disabled styles
  const disabledStyle = disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Prop validation
Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'solid']),
  size: PropTypes.oneOf(['sm', 'lg']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
