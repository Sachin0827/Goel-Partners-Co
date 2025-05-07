import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">Get in Touch</h1>
              <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-300 text-blue-100">
                We're here to help you with all your financial needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-500">
                <a href="tel:+919996130811" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                  <FaPhone className="mr-2" />
                  Call Us Now
                </a>
                <a href="#contact-form" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                  <FaEnvelope className="mr-2" />
                  Send Message
                </a>
              </div>
            </div>
            
            {/* Right side - Illustration */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Professional Business Communication"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-2xl text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">405, Emaar Palm Spring Plaza, Sector 54, Gurugram</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-2xl text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91-9996130811</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-2xl text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@goelpartners.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-2xl text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Expert team of qualified professionals</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Personalized service and attention</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Timely and efficient service delivery</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Competitive pricing and transparent billing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0722!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDQnMTkuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}