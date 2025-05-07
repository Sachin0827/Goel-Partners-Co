import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
    description: "Expert guidance on optimizing your income tax liabilities, ensuring compliance and maximizing savings through strategic planning and up-to-date knowledge of tax laws.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-blue-700 mb-4" />,
    title: "GST Compliance",
    description: "Comprehensive GST services including registration, filing, and advisory to ensure your business remains compliant with the latest GST regulations.",
  },
  {
    icon: <FaRegChartBar className="text-4xl text-blue-700 mb-4" />,
    title: "Tax Audits",
    description: "Thorough tax audit services to ensure accuracy, transparency, and compliance with statutory requirements, minimizing risk and ensuring peace of mind.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-700 mb-4" />,
    title: "Strategic Tax Advisory",
    description: "Personalized tax strategies tailored to your business or personal needs, leveraging deep expertise to provide proactive and effective tax solutions.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Enterprises",
    text: "Goel Partners & Co has been handling our tax matters for over 5 years. Their expertise and attention to detail have saved us significant amounts in tax liabilities.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Sharma Textiles Ltd.",
    text: "The team's knowledge of GST regulations is exceptional. They've made compliance simple and hassle-free for our business.",
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
    question: "What tax services do you provide for businesses?",
    answer: "We offer comprehensive tax services including income tax planning, GST compliance, tax audits, and strategic tax advisory tailored to your business needs."
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by calling us, sending an email, or using the contact form on our website. We'll respond promptly to set up a meeting."
  },
  {
    question: "What documents should I prepare for tax filing?",
    answer: "For tax filing, you should prepare your income statements, expense receipts, investment documents, and any other financial records relevant to your tax situation."
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
        years: Math.floor(progress * 25),
        clients: Math.floor(progress * 500),
        savings: Math.floor(progress * 100),
        audits: Math.floor(progress * 1000)
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Trusted Chartered Accountancy for Direct & Indirect Tax Consultancy
            </h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-300">
              Delivering excellence in tax planning, GST compliance, audits, and strategic advisory for individuals and businesses.
            </p>
            <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center transform hover:scale-105 animate-fadeIn animation-delay-500">
              Schedule a Consultation
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Quick Contact Bar with responsive layout - preserving mobile design */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <h3 className="text-blue-900 font-bold text-xl">Need Immediate Assistance?</h3>
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-center md:space-x-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start mb-4 md:mb-0 px-4 md:items-center md:justify-center">
                  <div className="text-xl text-blue-700 mt-1 mr-3 md:mt-0">{item.icon}</div>
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
        {/* Services Section with Hover Effects */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR EXPERTISE</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive tax and financial services tailored to meet your specific needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
        
        {/* Why Choose Us Section with Enhanced Design */}
        <section className="mb-20 bg-gray-50 py-12 px-6 rounded-lg">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">WHY US</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine expertise, personalized service, and a commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white rounded-lg transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-2xl text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our professionals have decades of experience in tax consultancy</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white rounded-lg transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored solutions that address your specific financial needs</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white rounded-lg transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">100% Compliance</h3>
              <p className="text-gray-600">Perfect record of regulatory compliance and accuracy</p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section with Carousel Effect */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          
          <div className="relative bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700 max-w-3xl mx-auto">
            <FaQuoteLeft className="text-blue-200 text-5xl absolute top-4 left-4 opacity-50" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex mb-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic">{testimonials[activeTestimonial].text}</p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold text-lg">{testimonials[activeTestimonial].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900 text-lg">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${index === activeTestimonial ? 'bg-blue-700' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section with Counter Animation */}
        <section id="stats-section" className="mb-20 py-12 px-6 bg-blue-900 text-white rounded-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-800 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-800 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-50"></div>
          
          <div className="text-center mb-12 relative z-10">
            <span className="inline-block px-3 py-1 bg-blue-800 text-white rounded-full text-sm font-semibold mb-3">OUR IMPACT</span>
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="max-w-2xl mx-auto opacity-80">We've helped hundreds of clients achieve financial success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaAward className="text-3xl text-yellow-400 mr-2" />
                <div className="text-4xl font-bold">{counters.years}+</div>
              </div>
              <p>Years of Experience</p>
            </div>
            <div className="p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaHandshake className="text-3xl text-yellow-400 mr-2" />
                <div className="text-4xl font-bold">{counters.clients}+</div>
              </div>
              <p>Satisfied Clients</p>
            </div>
            <div className="p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaChartLine className="text-3xl text-yellow-400 mr-2" />
                <div className="text-4xl font-bold">₹{counters.savings}Cr+</div>
              </div>
              <p>Tax Savings</p>
            </div>
            <div className="p-4 bg-blue-800 bg-opacity-30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaCheckCircle className="text-3xl text-yellow-400 mr-2" />
                <div className="text-4xl font-bold">{counters.audits}+</div>
              </div>
              <p>Successful Audits</p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">FAQ</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-blue-900 text-left">{item.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <FaArrowRight className="transform rotate-90" />
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact CTA Section with Enhanced Design */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 md:p-10 rounded-lg text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-blue-100">Contact us today for a consultation and discover how we can help optimize your tax strategy.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <a href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                <FaEnvelope className="mr-2" />
                Contact Us
              </a>
              <a href="tel:+919996130811" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
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