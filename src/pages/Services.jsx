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
  FaQuestionCircle
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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Jagdish Aggarwal & Co</title>
        <meta name="description" content="Comprehensive tax and financial services including income tax planning, GST compliance, tax audits, and strategic advisory for individuals and businesses." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Our Services</h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-300">
              Comprehensive tax and financial services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Services Introduction */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">OUR EXPERTISE</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive Tax & Financial Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Jagdish Aggarwal & Co, we offer a wide range of professional services designed to help individuals and businesses navigate the complexities of taxation and financial management. Our team of experts is committed to delivering personalized solutions that meet your specific needs.
            </p>
          </div>
        </section>
        
        {/* Primary Services */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-blue-700">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/contact" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-300">
                    Learn more <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="mb-20 bg-gray-50 py-12 px-6 rounded-lg">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">MORE SERVICES</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Beyond our core offerings, we provide a range of specialized services to meet diverse client needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-700">
                <div className="flex items-center">
                  <FaCheckCircle className="text-blue-700 mr-3" />
                  <h3 className="font-semibold text-blue-900">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">FAQ</span>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <FaQuestionCircle className="text-blue-700 mt-1 mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  </div>
                  <p className="text-gray-700 pl-8">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-blue-900 text-white p-10 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need Specialized Assistance?</h2>
              <p className="text-blue-100">Contact us today to discuss your specific requirements</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+91XXXXXXXXXX" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> Call Now
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}