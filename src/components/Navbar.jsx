// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Projects", href: "/" },
    { id: 3, name: "Experience", href: "/" },
    { id: 4, name: "Contact", href: "/" },
  ];

  return (
    <nav className="flex items-center justify-between gap-6 px-8 py-4 bg-slate-900 text-white shadow-lg rounded-lg">
      {/* Logo */}
      <div className="text-xl font-bold tracking-tight cursor-pointer transition-colors">
        Dev<span className="text-cyan-400">Port</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-2">
        {navLinks.map((link) => (
          <li
            onMouseEnter={() => setHovered(link.id)}
            key={link.name}
            className="relative"
          >
            {hovered === link.id && (
              <motion.span
                layoutId="hover"
                className="w-full h-full p-4 bg-slate-800 absolute inset-0 left-1/2 top-1/2 -translate-1/2 rounded-sm z-0"
              ></motion.span>
            )}
            <button className="z-10 relative px-4 py-2 cursor-pointer rounded-md text-sm font-medium transition-all duration-300 active:scale-95 text-white">
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
