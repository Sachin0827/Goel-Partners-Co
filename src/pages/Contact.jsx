import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <ContactForm />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Address:</p>
                  <p>405, Emaar Palm Spring Plaza, Sector 54, Gurugram</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p>info@goelpartners.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>+91-9996130811</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}