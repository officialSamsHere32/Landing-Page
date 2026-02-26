import React from "react";
import Adidas from "../assets/adidas.png";

const navItems = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Contact", href: "/contact" }
];

function Navbar() {
  return (
    <nav className="w-full h-[100px] flex items-center justify-center shadow-md">
      <div className="w-[1200px] flex items-center">
        
        {/* Logo */}
        <img 
          src={Adidas} 
          alt="Adidas Logo"
          className="h-[50px] object-contain"
        />

        {/* Menu */}
        <div className="flex ml-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="ml-12 text-black hover:font-bold transition-all duration-200"
            >
              {item.text}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;