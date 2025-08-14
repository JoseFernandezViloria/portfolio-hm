// import { useState } from "react";
import { Code } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 rigth-0 z-50 bg-white/10 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-9 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center shadow-lg ">
            <Code size={20} className="text-black" />
          </div>
          <div className="text-xl font-bold tracking-widest text-black">
            JOSE.DEV
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex item-center gap-6">
            <button>Sobre mí</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
