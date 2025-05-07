import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaUserTie, 
  FaUserAlt,
  FaFemale,
  FaHistory, 
  FaAward, 
  FaHandshake, 
  FaChartLine, 
  FaGraduationCap,
  FaCheckCircle,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaArrowRight
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Sachin Kumar",
    position: "Founder & Managing Partner",
    bio: "A young and dynamic chartered accountant with a vision to make financial services accessible and simple for startups and small businesses.",
    education: "Chartered Accountant, B.Com (Hons)"
  },
  {
    name: "Priya Singh",
    position: "Tax Consultant",
    bio: "Specializes in GST compliance and business registration, helping new entrepreneurs navigate the complexities of tax regulations.",
    education: "Chartered Accountant, M.Com"
  },
  {
    name: "Amit Verma",
    position: "Business Advisory",
    bio: "Expert in startup financial planning and compliance, helping new businesses establish strong financial foundations.",
    education: "Chartered Accountant, MBA"
  }
];

const partners = [
  {
    name: "Sachin Kumar",
    position: "Founder & Managing Partner",
    qualification: "ACA, B.Com (Hons)",
    experience: "5+ years of experience in tax consultancy and business advisory",
    specialization: "Startup Advisory, Tax Planning",
    image: null
  },
  {
    name: "Priya Singh",
    position: "Tax Consultant",
    qualification: "ACA, M.Com",
    experience: "3+ years of experience in GST and business registration",
    specialization: "GST Compliance, Business Setup",
    image: null
  },
  {
    name: "Amit Verma",
    position: "Business Advisor",
    qualification: "ACA, MBA",
    experience: "4+ years of experience in startup advisory",
    specialization: "Financial Planning, Business Strategy",
    image: null
  }
];

const milestones = [
  {
    year: "2020",
    title: "Firm Established",
    description: "Founded with a vision to provide modern, tech-enabled CA services for startups and small businesses."
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Implemented cloud-based solutions for seamless client service and document management."
  },
  {
    year: "2022",
    title: "Service Expansion",
    description: "Added comprehensive business advisory and startup support services to our portfolio."
  },
  {
    year: "2023",
    title: "Client Growth",
    description: "Successfully served 100+ startups and small businesses with our innovative approach."
  },
  {
    year: "2024",
    title: "Future Ready",
    description: "Continuously evolving our services to meet the changing needs of modern businesses."
  }
];

const values = [
  {
    icon: <FaHandshake className="text-3xl text-blue-700" />,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our professional relationships."
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-700" />,
    title: "Excellence",
    description: "We are committed to delivering exceptional service and accurate results."
  },
  {
    icon: <FaUsers className="text-3xl text-blue-700" />,
    title: "Client Focus",
    description: "We prioritize understanding and meeting the unique needs of each client."
  },
  {
    icon: <FaGraduationCap className="text-3xl text-blue-700" />,
    title: "Expertise",
    description: "We maintain cutting-edge knowledge of tax laws and financial regulations."
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Goel Partners & Co</title>
        <meta name="description" content="Learn about Goel Partners & Co, our history, our team of expert chartered accountants, and our commitment to excellence in tax consultancy." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">About Our Firm</h1>
              <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-300 text-blue-100">
                A legacy of excellence in chartered accountancy and tax consultancy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-500">
                <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                  Get in Touch
                  <FaArrowRight className="ml-2" />
                </a>
                <a href="#team" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                  Meet Our Team
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Professional Team"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
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
        {/* About Us Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR STORY</span>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a modern chartered accountancy firm founded in 2020 with a mission to simplify financial services for startups and small businesses. Our approach combines traditional expertise with innovative solutions to help new businesses thrive.
              </p>
              <p className="text-gray-700 mb-6">
                As a young and dynamic team, we understand the challenges faced by startups and entrepreneurs. We believe in building long-term relationships with our clients, providing not just compliance services but also strategic guidance for growth.
              </p>
              <p className="text-gray-700 mb-6">
                Our tech-enabled approach and personalized service model make us the ideal partner for modern businesses. We're committed to making financial management simple, transparent, and accessible.
              </p>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <FaCheckCircle className="text-green-600 mr-3 text-xl" />
                <span className="font-semibold text-blue-900">Registered with Institute of Chartered Accountants of India</span>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <FaUserTie className="text-9xl text-blue-700 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-900">Modern Approach</h3>
                    <p className="text-blue-800 text-xl">Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-24 bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 rounded-2xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR VALUES</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our core values guide everything we do and define our approach to client service</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white rounded-xl transform hover:-translate-y-2">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Team Section */}
        <section id="team" className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR TEAM</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Meet Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our leadership team brings decades of experience and expertise to serve your financial needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-72 bg-gradient-to-br from-blue-50 to-white relative">
                  {partner.image ? (
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {partner.name.includes("Sachin") && (
                        <FaUserTie className="text-8xl text-blue-700 opacity-30" />
                      )}
                      {partner.name.includes("Priya") && (
                        <FaUserAlt className="text-8xl text-blue-700 opacity-30" />
                      )}
                      {partner.name.includes("Amit") && (
                        <FaFemale className="text-8xl text-blue-700 opacity-30" />
                      )}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{partner.name}</h3>
                  <p className="text-blue-700 font-medium text-lg mb-4">{partner.position}</p>
                  <div className="space-y-3">
                    <p className="text-gray-600"><strong className="text-blue-900">Qualification:</strong> {partner.qualification}</p>
                    <p className="text-gray-600"><strong className="text-blue-900">Experience:</strong> {partner.experience}</p>
                    <p className="text-gray-600"><strong className="text-blue-900">Specialization:</strong> {partner.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Journey Section - Vertical Timeline */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR JOURNEY</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Growth Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From our founding to becoming a trusted name in financial services</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Mobile Timeline */}
            <div className="md:hidden relative pl-6">
              {/* Vertical accent line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200 rounded-full"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-6">
                  {/* Year circle, overlapping card */}
                  <div className="absolute -left-6 top-4 z-10">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white text-xs font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="ml-8 bg-white p-4 rounded-xl shadow-xl border-l-4 border-blue-400 relative">
                    <h3 className="text-base font-bold text-blue-900 mb-1">{milestone.title}</h3>
                    <p className="text-gray-700 text-sm leading-snug">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {/* Year marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg">
                        <span className="text-xl font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'ml-auto pl-12 pr-4' : 'mr-auto pr-12 pl-4'} w-5/12 pt-12`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">{milestone.title}</h3>
                        <p className="text-gray-600 text-lg">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Timeline end */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-lg"></div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 p-12 rounded-2xl text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="mb-10 max-w-2xl mx-auto text-xl text-blue-100">Contact us today to schedule a consultation with our expert team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                <FaEnvelope className="mr-2" />
                Get in Touch
              </a>
              <a href="tel:+919996130811" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                <FaPhone className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}