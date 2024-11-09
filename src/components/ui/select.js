import React from 'react';

const Select = React.forwardRef(({ label, options= [], ...props }, ref) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-sm font-semibold">{label}</label>}
      
      <select
        ref={ref}
        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={label} // Add aria-label for accessibility
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
