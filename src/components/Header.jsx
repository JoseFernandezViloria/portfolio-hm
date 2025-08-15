// import { useState } from "react";
import { Code, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
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

            <a
              href="#projects"
              className="hover:text-blue-300 transition-colors"
            >
              Proyectos
            </a>
          </div>

          <button className="relative flex items-center gap-2 px-3 py-1 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 group">
            <Globe
              size={16}
              className="group-hover:rotate-180 transition-transform duration-300"
            />
            <span className="font-mono">ES</span>
          </button>

          <a
            href="#contact"
            className="px-6 py-2 bg-red-600 text-white font-semibold shadow-lg hover:shadow-red-500/25 transition-all duration-300 ease-in-out"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
