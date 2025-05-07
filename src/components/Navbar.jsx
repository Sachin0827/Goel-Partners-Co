import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white relative z-50"> {/* Added relative and z-50 */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          {/* Replace the existing logo with the CA India logo */}
          <img 
            src="/ca-india-logo.png" 
            alt="CA India Logo" 
            className="h-12 w-auto mr-2" 
          />
          <span className="font-bold text-xl">Jagdish Aggarwal & Co</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}