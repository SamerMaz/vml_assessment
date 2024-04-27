import React from "react";

type TypeProps = {
  type: "submit" | "reset" | "button";
  name: string;
  disable?: boolean;
};

const Button = ({ type, name,disable }: TypeProps) => {
  return (
    <button
      type={type}
      disabled={disable}
      className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-2"
    >
      {disable? "loading...": name}
    </button>
  );
};

export default Button;
