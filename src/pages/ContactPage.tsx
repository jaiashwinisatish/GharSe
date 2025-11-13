import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Mon - Sat: 9 AM - 8 PM</p>
            <a href="tel:+919876543210" className="text-brand-orange font-medium hover:underline">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
            <a href="mailto:hello@gharse.com" className="text-brand-orange font-medium hover:underline">
              hello@gharse.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 Food Street<br />
              Andheri West, Mumbai<br />
              Maharashtra - 400053
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="chef">Becoming a Chef</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-cream rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-medium text-gray-900">Monday - Saturday</p>
                    <p className="text-gray-600">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-medium text-gray-900">Sunday</p>
                    <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4">
                <details className="cursor-pointer">
                  <summary className="font-medium text-gray-900">How do I place an order?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Browse dishes, add them to cart, and checkout with your delivery address.
                  </p>
                </details>
                <details className="cursor-pointer">
                  <summary className="font-medium text-gray-900">What are the delivery charges?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Delivery is free for orders above ₹200. Below that, we charge ₹30.
                  </p>
                </details>
                <details className="cursor-pointer">
                  <summary className="font-medium text-gray-900">How do I become a chef?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Fill out the chef registration form and our team will contact you within 48 hours.
                  </p>
                </details>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-white/90 mb-6">
                Call our customer support team for instant assistance
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block px-8 py-3 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
