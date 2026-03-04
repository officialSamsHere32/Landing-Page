import React, { useState } from "react";
import Adidas from "../assets/adidas.png";
import Logo from "../assets/SideBar1.png"

const navItems = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Services", href: "#services" },
  { id: 4, text: "Contact", href: "/contact" }
];

function Navbar_mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <nav className="w-full h-auto flex items-center justify-center shadow-md ">
        <div className="w-[90%] sm:w-full sm:px-6 flex items-center py-3 sm:py-4">
          <button 
            onClick={toggleSidebar} 
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <img src={Logo} alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-full sm:w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-16 sm:pt-20 px-4 sm:px-6 space-y-2 sm:space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-black text-base sm:text-lg hover:font-bold hover:bg-gray-100 transition-all duration-200 py-3 sm:py-2 px-3 rounded border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Navbar_mobile;