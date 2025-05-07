import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    subject: "",
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
        <div className="text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Thank you for contacting us!</h3>
        <p>We've received your message and will get back to you shortly.</p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="mt-4 text-blue-700 hover:text-blue-900 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" aria-label="Contact form" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-blue-900 font-semibold mb-1">Name *</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            required 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-blue-900 font-semibold mb-1">Email *</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-blue-900 font-semibold mb-1">Phone</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            value={form.phone} 
            onChange={handleChange} 
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-blue-900 font-semibold mb-1">Subject *</label>
          <input 
            id="subject" 
            name="subject" 
            type="text" 
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            value={form.subject} 
            onChange={handleChange} 
            placeholder="How can we help you?"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-blue-900 font-semibold mb-1">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          value={form.message} 
          onChange={handleChange}
          placeholder="Please provide details about your inquiry..."
        ></textarea>
      </div>
      
      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="privacy" 
          className="mr-2" 
          required
        />
        <label htmlFor="privacy" className="text-gray-700 text-sm">
          I agree to the <a href="#" className="text-blue-700 hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
        </label>
      </div>
      
      <button 
        type="submit" 
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 font-medium flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : "Send Message"}
      </button>
    </form>
  );
}