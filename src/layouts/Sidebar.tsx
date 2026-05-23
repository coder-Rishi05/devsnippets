import { Code, SquareDashedBottomCode } from "lucide-react";
import React from "react";
import { BsTypescript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Sidebar = () => {
  const items = [
    { name: "All Snippets", icon: <SquareDashedBottomCode /> },
    { name: "Favorites", icon: <Code /> },
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <BsTypescript />     },
    { name: "Backend", icon: <IoLogoNodejs /> },
  ];

  return (
    <div className="w-64 border-zinc-800 border-r p-4 h-screen">
      <h1 className="text-2xl font-bold mb-8 hover:text-zinc-200 cursor-pointer transition-colors duration-300 ">
        DevSnippets
      </h1>

      <div className="space-y-3">
        {items.map((data, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 cursor-pointer transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-zinc-400">
                {data.icon}
              </span>
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
