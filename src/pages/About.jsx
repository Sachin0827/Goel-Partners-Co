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
  FaUsers
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Jagdish Aggarwal",
    position: "Founder & Managing Partner",
    bio: "With over 25 years of experience in tax consultancy and financial advisory, Jagdish leads our firm with expertise in direct taxation and strategic planning.",
    education: "Chartered Accountant, B.Com (Hons)"
  },
  {
    name: "Anita Sharma",
    position: "Partner, Indirect Taxation",
    bio: "Anita specializes in GST compliance and indirect tax optimization with 15+ years of experience helping businesses navigate complex tax regulations.",
    education: "Chartered Accountant, M.Com"
  },
  {
    name: "Rajiv Mehta",
    position: "Senior Tax Consultant",
    bio: "Rajiv brings 12 years of expertise in income tax planning and corporate compliance, helping clients minimize liabilities while ensuring full compliance.",
    education: "Chartered Accountant, LLB"
  }
];

const partners = [
  {
    name: "Rajiv Goel",
    position: "Managing Partner",
    qualification: "FCA, B.Com (Hons)",
    experience: "25+ years of experience in tax consultancy and audits",
    specialization: "Income Tax Planning, Strategic Advisory",
    image: null // Use null to trigger the fallback
  },
  {
    name: "Amit Sharma",
    position: "Partner",
    qualification: "ACA, M.Com",
    experience: "15+ years of experience in GST and indirect taxes",
    specialization: "GST Compliance, Indirect Taxation",
    image: null
  },
  {
    name: "Priya Verma",
    position: "Partner",
    qualification: "FCA, LLB",
    experience: "18+ years of experience in corporate taxation",
    specialization: "Corporate Tax Planning, Tax Audits",
    image: null
  }
];

const milestones = [
  {
    year: "1998",
    title: "Firm Established",
    description: "Jagdish Aggarwal & Co was founded with a vision to provide expert tax consultancy services."
  },
  {
    year: "2005",
    title: "Expanded Services",
    description: "Added comprehensive audit and financial advisory services to our portfolio."
  },
  {
    year: "2010",
    title: "New Office",
    description: "Moved to our current location to accommodate our growing team and client base."
  },
  {
    year: "2017",
    title: "GST Expertise",
    description: "Developed specialized GST compliance and advisory services following the tax reform."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented advanced digital solutions to enhance client service and efficiency."
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">About Our Firm</h1>
            <p className="text-xl mb-4 animate-fadeIn animation-delay-300">
              A legacy of excellence in chartered accountancy and tax consultancy
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Us Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR STORY</span>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Goel Partners & Co is a trusted chartered accountancy firm with decades of experience in direct and indirect tax consultancy. Our mission is to deliver reliable, transparent, and client-focused solutions for individuals and businesses.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 1998, we have grown from a small practice to a respected firm with a team of experienced professionals dedicated to helping our clients navigate the complexities of taxation and financial management.
              </p>
              <p className="text-gray-700 mb-6">
                Our team is led by experienced professionals who are committed to upholding the highest standards of integrity and service excellence. We combine technical expertise with practical business insights to deliver solutions that add real value.
              </p>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                <span className="font-semibold">Registered with Institute of Chartered Accountants of India</span>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-blue-200 rounded-lg flex items-center justify-center">
                <FaUserTie className="text-9xl text-blue-700 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-900">Professional Excellence</h3>
                    <p className="text-blue-800">Since 1998</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-20 bg-gray-50 py-12 px-6 rounded-lg">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR VALUES</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our core values guide everything we do and define our approach to client service</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white rounded-lg transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR TEAM</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our leadership team brings decades of experience and expertise to serve your financial needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-64 bg-gray-200">
                  {partner.image ? (
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100">
                      {/* Use more specific person icons */}
                      {partner.name.includes("Rajiv") && (
                        <FaUserTie className="text-7xl text-blue-700" />
                      )}
                      {partner.name.includes("Amit") && (
                        <FaUserAlt className="text-7xl text-blue-700" />
                      )}
                      {partner.name.includes("Priya") && (
                        <FaFemale className="text-7xl text-blue-700" />
                      )}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{partner.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{partner.position}</p>
                  <p className="text-gray-600 mb-2"><strong>Qualification:</strong> {partner.qualification}</p>
                  <p className="text-gray-600 mb-2"><strong>Experience:</strong> {partner.experience}</p>
                  <p className="text-gray-600"><strong>Specialization:</strong> {partner.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Journey Section - Vertical Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR JOURNEY</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A timeline of our growth and achievements over the years</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative pb-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Year with icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mb-1">
                      <FaHistory className="text-sm" />
                    </div>
                    <div className="text-blue-700 font-bold">{milestone.year}</div>
                  </div>
                  
                  {/* Content - alternating left and right */}
                  <div className={`${index % 2 === 0 ? 'ml-auto pl-12 pr-4' : 'mr-auto pr-12 pl-4'} w-5/12 pt-12`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-2 border-blue-500">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline end */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-blue-900 text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Contact us today to schedule a consultation with our expert team.</p>
          <a href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block">
            Get in Touch
          </a>
        </section>
      </main>
      
      <Footer />
    </>
  );
}