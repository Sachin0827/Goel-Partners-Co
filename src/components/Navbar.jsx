import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-white">
              Goel Partners <span className="text-blue-300">&</span> Co
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
        </ul>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" className="hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}