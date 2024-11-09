import React from 'react';

const Input = React.forwardRef(({ label, type = 'text', ...props }, ref) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-sm font-semibold">{label}</label>}
      <input
        ref={ref}
        type={type}
        className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  );
});

export default Input;
