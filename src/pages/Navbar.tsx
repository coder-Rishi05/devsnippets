import React from "react";

const Navbar = () => {
  return (
    <div className=" flex py-4 items-center  justify-center  ">
      <nav className="flex  rounded-2xl    items-center justify-between  border-t border-t-zinc-300  py-6 bg-[#0d0f10] w-[80%] px-10    ">
        <div className="left">
          <h2 className=" font-bold font-serif  text-2xl">DevSnippet</h2>
        </div>
        <div className="right flex item-center justify-center px-10 gap-12">
          <a
            className="font-medium text-zinc-400 hover:text-zinc-100"
            href="#Home"
          >
            Home
          </a>
          <a
            className="font-medium text-zinc-400 hover:text-zinc-100"
            href="#Template"
          >
            Templates
          </a>
          <a
            className="font-medium text-zinc-400 hover:text-zinc-100"
            href="#About"
          >
            About
          </a>
          <a
            className="font-medium text-zinc-400 hover:text-zinc-100"
            href="#Contact"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
