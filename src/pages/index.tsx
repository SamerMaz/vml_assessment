import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="text-center">
      <Link
        href="/form"
        className="bg-black hover:bg-grey-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Form
      </Link>
    </div>
  );
};

export default Home;
