import React from "react";

function NavBar() {
  return (
    <nav className="sticky px-5 py-3 flex justify-between navText items-center bg-transparent w-full">
      <div className="font-[500] text-xl">portofolio</div>
      <div className="font-[500] flex items-center gap-4 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/30">
        <span className="hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-full transition-all ease-in">
          Works
        </span>
        <span className="hover:cursor-pointer hover:bg-black hover:text-white px-2 py-1 rounded-full transition-all ease-in">
          Contact
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
