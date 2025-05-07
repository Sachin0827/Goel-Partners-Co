import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Goel Partners & Co</h3>
            <p className="mb-4">Trusted chartered accountants specializing in tax consultancy, GST compliance, audits, and strategic advisory.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/goelpartners" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaFacebook /></a>
              <a href="https://twitter.com/goelpartners" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
              <a href="https://linkedin.com/company/goelpartners" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>405, Emaar Palm Spring Plaza, Sector 54, Gurugram</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <span>+91-9996130811</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <span>info@goelpartners.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Goel Partners & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}