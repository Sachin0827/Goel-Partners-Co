import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FaBalanceScale, 
  FaFileInvoiceDollar, 
  FaRegChartBar, 
  FaLightbulb, 
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaHandshake,
  FaChartLine
} from "react-icons/fa";

const services = [
  {
    icon: <FaBalanceScale className="text-4xl text-blue-700 mb-4" />,
    title: "Income Tax Planning",
    description: "Expert guidance on optimizing your income tax liabilities, ensuring compliance and maximizing savings through strategic planning and up-to-date knowledge of tax laws.",
    features: [
      "Personal and business tax planning",
      "Tax-saving investment strategies",
      "Advance tax calculation and planning",
      "Tax deduction optimization"
    ]
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-blue-700 mb-4" />,
    title: "GST Compliance",
    description: "Comprehensive GST services including registration, filing, and advisory to ensure your business remains compliant with the latest GST regulations.",
    features: [
      "GST registration and return filing",
      "Input tax credit management",
      "GST audit and assessment support",
      "E-way bill compliance"
    ]
  },
  {
    icon: <FaRegChartBar className="text-4xl text-blue-700 mb-4" />,
    title: "Tax Audits",
    description: "Thorough tax audit services to ensure accuracy, transparency, and compliance with statutory requirements, minimizing risk and ensuring peace of mind.",
    features: [
      "Income tax audits under section 44AB",
      "GST audits and reconciliation",
      "Internal audit services",
      "Statutory compliance audits"
    ]
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-700 mb-4" />,
    title: "Strategic Tax Advisory",
    description: "Personalized tax strategies tailored to your business or personal needs, leveraging deep expertise to provide proactive and effective tax solutions.",
    features: [
      "Business restructuring for tax efficiency",
      "International tax planning",
      "Tax implications of mergers & acquisitions",
      "Wealth tax planning for individuals"
    ]
  },
];

const additionalServices = [
  "Corporate Compliance Services",
  "Accounting and Bookkeeping",
  "Financial Statement Preparation",
  "Business Registration and Incorporation",
  "Payroll Processing and Compliance",
  "TDS/TCS Compliance",
  "ROC Compliance",
  "FEMA Compliance"
];

const faqs = [
  {
    question: "How often should my business undergo a tax audit?",
    answer: "The frequency of tax audits depends on your business structure and turnover. Under the Income Tax Act, businesses with turnover exceeding certain thresholds must undergo mandatory annual tax audits. We recommend regular internal audits regardless of statutory requirements to ensure ongoing compliance."
  },
  {
    question: "What documents do I need for GST registration?",
    answer: "For GST registration, you'll need PAN of the business, Aadhaar of the proprietor/partners/directors, business registration documents, bank account details, digital signature, and address proof of the business premises. Our team can guide you through the entire process and documentation requirements."
  },
  {
    question: "How can tax planning benefit my business?",
    answer: "Effective tax planning can significantly reduce your tax liability through legitimate means, improve cash flow, minimize the risk of non-compliance penalties, and provide clarity for business decision-making. Our strategic approach ensures you utilize all available deductions and exemptions while maintaining full compliance."
  }
];

const benefits = [
  {
    icon: <FaUserTie className="text-3xl text-blue-700" />,
    title: "Expert Team",
    description: "Our professionals bring years of experience and deep industry knowledge to every engagement."
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-700" />,
    title: "Personalized Service",
    description: "We tailor our solutions to meet your specific business needs and objectives."
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-700" />,
    title: "Proven Results",
    description: "Our track record of successful client outcomes speaks to our commitment to excellence."
  }
];

const process = [
  {
    title: "Initial Consultation",
    description: "We begin with a thorough discussion of your needs and objectives to understand your requirements."
  },
  {
    title: "Strategy Development",
    description: "Our team develops a customized approach tailored to your specific situation."
  },
  {
    title: "Implementation",
    description: "We execute the plan with precision and attention to detail."
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support and guidance to ensure long-term success."
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Jagdish Aggarwal & Co</title>
        <meta name="description" content="Comprehensive tax and financial services including income tax planning, GST compliance, tax audits, and strategic advisory for individuals and businesses." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">Our Services</h1>
              <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-300 text-blue-100">
                Comprehensive financial solutions tailored to your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-500">
                <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                  Get Started
                  <FaArrowRight className="ml-2" />
                </a>
                <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center transform hover:scale-105">
                  Explore Services
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
            
            {/* Right side - Illustration */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                      alt="Business Consulting Services"
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
        {/* Services Overview */}
        <section id="services" className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">WHAT WE OFFER</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We provide a comprehensive range of financial services to help your business thrive</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-4 rounded-xl mr-6">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Why Choose Our Services */}
        <section className="mb-24 bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 rounded-2xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Our Services Stand Out</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We combine expertise with personalized service to deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white rounded-xl transform hover:-translate-y-2">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Service Process */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR PROCESS</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our streamlined process ensures efficient and effective service delivery</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 flex-grow">
                      <h3 className="text-2xl font-semibold text-blue-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Process line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300"></div>
              
              {/* Process steps */}
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'ml-auto pl-12 pr-4' : 'mr-auto pr-12 pl-4'} w-5/12 pt-12`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Process end */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-lg"></div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 p-12 rounded-2xl text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="mb-10 max-w-2xl mx-auto text-xl text-blue-100">Contact us today to discuss how we can help your business thrive.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg">
                <FaEnvelope className="mr-2" />
                Contact Us
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