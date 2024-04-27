import React from "react";

type ErrorProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorProps) => {
  if (!message) return null;
  return <div className="text-sm text-red-600">{message}</div>;
};

export default ErrorMessage;
