// component/Input.tsx
import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: any;
}

const Input: React.FC<InputProps> =
  // React.memo(
  ({ className, label, placeholder, name, value, onChange }) => {
    const classes = `
    button relative inline-flex interms-center justify-center h-11 transition-colors
    hover:text-color-1 text-n-1 my-5
    ${className || ''}`;

    const renderInput = () => (
      <div className={classes}>
        <label className="block pb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );

    return renderInput();
  };
// );

export default Input;
