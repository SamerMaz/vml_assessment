import React from "react";

type TypeProps = {
  type: "submit" | "reset" | "button";
  name: string;
};

const Button = ({ type, name }: TypeProps) => {
  return (
    <button
      type={type}
      className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-2"
    >
      {name}
    </button>
  );
};

export default Button;
