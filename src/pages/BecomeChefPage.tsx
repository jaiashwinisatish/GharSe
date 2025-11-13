import { useState } from 'react';
import { ChefHat, TrendingUp, Clock, Heart, CheckCircle, Upload } from 'lucide-react';

export default function BecomeChefPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    cuisines: [] as string[],
    speciality: '',
    experience: '',
    availability: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Chef registration:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCuisineToggle = (cuisine: string) => {
    setFormData({
      ...formData,
      cuisines: formData.cuisines.includes(cuisine)
        ? formData.cuisines.filter((c) => c !== cuisine)
        : [...formData.cuisines, cuisine],
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Extra Income',
      description: 'Make ₹15,000 - ₹50,000 per month cooking from home',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Cook when you want, set your own hours and availability',
    },
    {
      icon: Heart,
      title: 'Share Your Passion',
      description: 'Spread the love of homemade food with your community',
    },
    {
      icon: CheckCircle,
      title: 'Zero Investment',
      description: 'No setup costs, use your existing kitchen and skills',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Register',
      description: 'Fill out the application form with your details',
    },
    {
      step: 2,
      title: 'Verification',
      description: 'We verify your kitchen and documentation',
    },
    {
      step: 3,
      title: 'Training',
      description: 'Quick onboarding on food safety and our platform',
    },
    {
      step: 4,
      title: 'Start Cooking',
      description: 'List your dishes and start receiving orders',
    },
  ];

  const cuisineOptions = [
    'North Indian',
    'South Indian',
    'Punjabi',
    'Bengali',
    'Gujarati',
    'Maharashtrian',
    'Chinese',
    'Continental',
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Become a Home Chef with GharSe
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Turn your cooking passion into a profitable business. Join hundreds of home chefs earning from their kitchen.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-brand-orange">500+</div>
                  <div className="text-sm text-gray-600">Active Chefs</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-brand-green">₹35K</div>
                  <div className="text-sm text-gray-600">Avg. Monthly Earning</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-brand-orange">4.8</div>
                  <div className="text-sm text-gray-600">Avg. Rating</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Home chef cooking"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join GharSe?</h2>
          <p className="text-lg text-gray-600">Benefits of becoming a home chef partner</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-white/90">Simple steps to start your home chef journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="bg-white text-brand-orange w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Join as a Home Chef</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="Your full name"
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
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="Street address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="Mumbai"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="400001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Cuisines You Cook * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {cuisineOptions.map((cuisine) => (
                    <label
                      key={cuisine}
                      className={`flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.cuisines.includes(cuisine)
                          ? 'border-brand-orange bg-brand-cream text-brand-orange'
                          : 'border-gray-200 hover:border-brand-orange'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.cuisines.includes(cuisine)}
                        onChange={() => handleCuisineToggle(cuisine)}
                      />
                      <span className="text-sm font-medium">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Speciality Dish *
                </label>
                <input
                  type="text"
                  name="speciality"
                  required
                  value={formData.speciality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="e.g., Butter Chicken, Biryani, Dal Makhani"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cooking Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="">Select experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full Time (All days)</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About You & Your Cooking
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  placeholder="Tell us about your cooking style, experience, and what makes your food special..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-orange transition-all cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-cream rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clean, well-maintained home kitchen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">FSSAI registration (we'll help you get it)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Passion for cooking and customer service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Smartphone for managing orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ability to prepare 10-20 orders daily</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earnings Calculator</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">10 orders/day × ₹150 avg</span>
                    <span className="font-bold">₹1,500/day</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">26 working days/month</span>
                    <span className="font-bold">₹39,000/month</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">After platform fee (15%)</span>
                      <span className="font-bold text-brand-green text-xl">₹33,150/month</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  This is just an estimate. Your earnings depend on orders, pricing, and working hours.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Chefs Say</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-orange pl-4">
                  <p className="text-gray-700 mb-2">
                    "GharSe changed my life! I earn more than my previous job, and I cook from home."
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Priya, Mumbai</p>
                </div>
                <div className="border-l-4 border-brand-orange pl-4">
                  <p className="text-gray-700 mb-2">
                    "Love the flexibility. I cook when I want and customers love my food!"
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Fatima, Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
