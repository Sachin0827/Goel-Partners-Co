import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaBalanceScale, 
  FaFileInvoiceDollar, 
  FaRegChartBar, 
  FaLightbulb, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaHandshake, 
  FaChartLine, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaQuoteLeft,
  FaArrowRight,
  FaStar,
  FaAward,
  FaClock,
  FaCalendarAlt
} from "react-icons/fa";

const services = [
  {
    icon: <FaBalanceScale className="text-4xl text-blue-700 mb-4" />,
    title: "Income Tax Planning",
    description: "Personalized tax planning solutions for individuals and small businesses, helping you navigate tax laws and maximize savings.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-blue-700 mb-4" />,
    title: "GST Compliance",
    description: "Simplified GST services including registration, filing, and advisory to keep your business compliant with minimal hassle.",
  },
  {
    icon: <FaRegChartBar className="text-4xl text-blue-700 mb-4" />,
    title: "Business Setup & Compliance",
    description: "End-to-end support for new business registration, compliance requirements, and ongoing statutory filings.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-700 mb-4" />,
    title: "Financial Advisory",
    description: "Strategic financial guidance for startups and small businesses, helping you make informed decisions for growth.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechStart Solutions",
    text: "As a new startup, we needed guidance on tax compliance and business setup. Their team made everything simple and straightforward.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    company: "Creative Designs",
    text: "The personalized attention and clear communication made tax filing stress-free. Perfect for small businesses like ours.",
    rating: 5,
  },
];

const contactInfo = [
  {
    icon: <FaPhone className="text-blue-700" />,
    title: "Call Us",
    info: "+91-9996130811"
  },
  {
    icon: <FaEnvelope className="text-blue-700" />,
    title: "Email Us",
    info: "info@goelpartners.com"
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-700" />,
    title: "Visit Us",
    info: "405, Emaar Palm Spring Plaza, Sector 54, Gurugram"
  }
];

const faqItems = [
  {
    question: "What services do you offer for startups?",
    answer: "We provide comprehensive support for startups including business registration, tax planning, GST compliance, and ongoing financial advisory services."
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by calling us, sending an email, or using the contact form on our website. We offer flexible timing to accommodate your schedule."
  },
  {
    question: "What documents do I need for business registration?",
    answer: "For business registration, you'll need identity proof, address proof, and basic business details. We'll guide you through the entire process step by step."
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [counters, setCounters] = useState({ years: 0, clients: 0, savings: 0, audits: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate counters when stats section is visible
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const position = statsSection.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0 && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  
  const animateCounters = () => {
    const duration = 2000; // ms
    const steps = 50;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(progress * 3),
        clients: Math.floor(progress * 50),
        savings: Math.floor(progress * 25),
        audits: Math.floor(progress * 100)
      });
      
      if (currentStep === steps) {
        clearInterval(interval);
      }
    }, stepTime);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  return (
    <>
      <Helmet>
        <title>Goel Partners & Co | Chartered Accountancy Firm</title>
        <meta name="description" content="Trusted chartered accountants specializing in direct and indirect tax consultancy, GST, audits, and strategic advisory." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section with Background and Animation */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
                Your Trusted Partner in <span className="text-blue-300">Financial Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-300 text-blue-100">
                Modern chartered accountancy services for businesses. We make compliance simple and help you focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-500">
                <Link to="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                  Start Your Journey
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                  Explore Services
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                      alt="Financial Growth and Sustainability"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
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
      
      {/* Quick Contact Bar with enhanced design */}
      <div className="bg-white py-8 shadow-lg transform -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <h3 className="text-blue-900 font-bold text-2xl">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mt-2">We're here to help you succeed</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="text-2xl text-blue-700 mr-4">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <p className="font-semibold text-blue-900">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Services Section with enhanced design */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR EXPERTISE</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Comprehensive Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Tailored solutions to meet your specific business needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
        
        {/* Why Choose Us Section with enhanced design */}
        <section className="mb-24 bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 rounded-2xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">WHY US</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We combine expertise, personalized service, and a commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white rounded-xl transform hover:-translate-y-2">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserTie className="text-3xl text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Our professionals bring years of experience and deep industry knowledge</p>
            </div>
            <div className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white rounded-xl transform hover:-translate-y-2">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-3xl text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Personalized Service</h3>
              <p className="text-gray-600">Tailored solutions that address your specific financial needs</p>
            </div>
            <div className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white rounded-xl transform hover:-translate-y-2">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-3xl text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">100% Compliance</h3>
              <p className="text-gray-600">Perfect record of regulatory compliance and accuracy</p>
            </div>
          </div>
        </section>
        
        {/* Stats Section with enhanced design */}
        <section id="stats-section" className="mb-24 py-16 px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-4 py-2 bg-blue-800 text-white rounded-full text-sm font-semibold mb-4">OUR GROWTH</span>
            <h2 className="text-4xl font-bold mb-6">Making an Impact</h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-100">Building trust and delivering value to our growing client base</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaAward className="text-4xl text-yellow-400 mr-3" />
                <div className="text-5xl font-bold">{counters.years}+</div>
              </div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaHandshake className="text-4xl text-yellow-400 mr-3" />
                <div className="text-5xl font-bold">{counters.clients}+</div>
              </div>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaChartLine className="text-4xl text-yellow-400 mr-3" />
                <div className="text-5xl font-bold">₹{counters.savings}L+</div>
              </div>
              <p className="text-lg">Tax Savings</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaCheckCircle className="text-4xl text-yellow-400 mr-3" />
                <div className="text-5xl font-bold">{counters.audits}+</div>
              </div>
              <p className="text-lg">Successful Filings</p>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section with enhanced design */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 p-12 rounded-2xl text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="mb-10 max-w-2xl mx-auto text-xl text-blue-100">Contact us today for a consultation and discover how we can help optimize your tax strategy.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                <FaEnvelope className="mr-2" />
                Contact Us
              </Link>
              <a href="tel:+919996130811" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                <FaPhone className="mr-2" />
                Call Now
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-sm">
              <FaClock className="mr-2" />
              <span>Available Monday to Saturday, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}