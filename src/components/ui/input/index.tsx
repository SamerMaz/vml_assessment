import React from "react";
import ErrorMessage from "../error-message";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
};

const Input = ({
  label,
  name,
  type,
  value,
  error,
  textarea,
  onChange,
  onBlur,
}: InputProps) => {
  const inputClassName = `mt-1 block w-full px-3 py-2 border ${
    error ? "border-red-500" : "border-gray-300"
  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={inputClassName}
          rows={3}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          name={name}
          autoComplete="on"
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClassName}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Input;
