import { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function EventsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    cuisinePreference: '',
    budget: '',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event booking:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const eventTypes = [
    {
      name: 'Birthday Party',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Make birthdays special with delicious homemade treats',
    },
    {
      name: 'Wedding Reception',
      image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authentic traditional cuisine for your special day',
    },
    {
      name: 'Corporate Event',
      image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional catering for office parties and meetings',
    },
    {
      name: 'Family Gathering',
      image: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Home-style meals for family celebrations',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Custom Menus',
      description: 'Personalized menu planning based on your preferences',
    },
    {
      icon: CheckCircle,
      title: 'Fresh Ingredients',
      description: 'Only the freshest, highest quality ingredients',
    },
    {
      icon: CheckCircle,
      title: 'Expert Chefs',
      description: 'Experienced home chefs with excellent ratings',
    },
    {
      icon: CheckCircle,
      title: 'Flexible Service',
      description: 'Delivery, on-site cooking, or full-service catering',
    },
    {
      icon: CheckCircle,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality',
    },
    {
      icon: CheckCircle,
      title: 'Clean & Hygienic',
      description: 'Strict hygiene standards maintained',
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Party & Event Catering</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make your celebrations memorable with authentic homemade food prepared by our talented home chefs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Occasion</h2>
          <p className="text-lg text-gray-600">Choose from our wide range of event catering services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                <p className="text-white/90 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GharSe for Events?</h2>
            <p className="text-lg text-gray-600">We bring the taste of home to your celebrations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="Your name"
                  />
                </div>
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
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding Reception</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="family">Family Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="Address or venue"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuisine Preference
                  </label>
                  <select
                    name="cuisinePreference"
                    value={formData.cuisinePreference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="">Select cuisine</option>
                    <option value="north-indian">North Indian</option>
                    <option value="south-indian">South Indian</option>
                    <option value="punjabi">Punjabi</option>
                    <option value="bengali">Bengali</option>
                    <option value="mixed">Mixed Cuisine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget per Person
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="">Select budget</option>
                    <option value="200-300">₹200 - ₹300</option>
                    <option value="300-500">₹300 - ₹500</option>
                    <option value="500-800">₹500 - ₹800</option>
                    <option value="800+">₹800+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="Let us know about any dietary restrictions, allergies, or special menu items..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </button>

              <p className="text-sm text-gray-500 text-center">
                Our team will contact you within 24 hours to confirm your booking
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-brand-orange rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Submit Your Request</h4>
                    <p className="text-white/90 text-sm">Fill out the booking form with event details</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-brand-orange rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get Matched</h4>
                    <p className="text-white/90 text-sm">We connect you with the perfect home chef</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-brand-orange rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Customize Menu</h4>
                    <p className="text-white/90 text-sm">Work with the chef to finalize your menu</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-brand-orange rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enjoy Your Event</h4>
                    <p className="text-white/90 text-sm">Relax and let us take care of the food</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-orange mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Call us</p>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-orange mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email us</p>
                    <p className="text-sm text-gray-600">events@gharse.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-brand-orange mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">Mon - Sat: 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Catering Starting From</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Basic Package</span>
                  <span className="font-bold text-brand-orange">₹200/person</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Standard Package</span>
                  <span className="font-bold text-brand-orange">₹350/person</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Premium Package</span>
                  <span className="font-bold text-brand-orange">₹500/person</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Final pricing depends on menu selection, guest count, and service type
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
