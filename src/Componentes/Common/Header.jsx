import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="flex justify-between items-center py-4 px-6 lg:px-16">
        <div className="text-2xl font-bold text-gray-800">
          Cyberspace-inc
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex xl:gap-8 gap-4 text-gray-700 font-bold items-center">
            <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">ABOUT</Link></li>
            <li><Link to="/jobseekers" className="hover:text-blue-600">JOBSEEKERS</Link></li>
            <li><Link to="/employers" className="hover:text-blue-600">EMPLOYERS</Link></li>
            <li><Link to="/employersportal" className="hover:text-blue-600">EMPLOYERS PORTAL</Link></li>
            <li><Link to="/getintouch" className="hover:text-blue-600">GET IN TOUCH</Link></li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-bold">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">HOME</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">ABOUT</Link></li>
            <li><Link to="/jobseekers" onClick={() => setIsOpen(false)} className="hover:text-blue-600">JOBSEEKERS</Link></li>
            <li><Link to="/employers" onClick={() => setIsOpen(false)} className="hover:text-blue-600">EMPLOYERS</Link></li>
            <li><Link to="/employersportal" onClick={() => setIsOpen(false)} className="hover:text-blue-600">EMPLOYERS PORTAL</Link></li>
            <li><Link to="/getintouch" onClick={() => setIsOpen(false)} className="hover:text-blue-600">GET IN TOUCH</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
