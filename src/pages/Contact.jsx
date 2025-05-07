import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
        <div className="mb-8">
          <ContactForm />
        </div>
        <div className="text-gray-700">
          <p><strong>Office Address:</strong> 123 Main Street, New Delhi, India</p>
          <p><strong>Email:</strong> info@jaggaggarwalco.com</p>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
        </div>
      </main>
      <Footer />
    </>
  );
}