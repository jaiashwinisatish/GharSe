import { Check, Calendar, Clock, Utensils, Star } from 'lucide-react';

export default function TiffinPage() {
  const plans = [
    {
      name: 'Basic Plan',
      price: 2500,
      period: 'month',
      meals: '1 meal/day',
      popular: false,
      features: [
        '1 main curry',
        '4 rotis or rice',
        'Dal or salad',
        'Monday to Saturday delivery',
        'Lunch OR Dinner',
        'Cancel anytime after 1 month',
      ],
    },
    {
      name: 'Standard Plan',
      price: 4500,
      period: 'month',
      meals: '2 meals/day',
      popular: true,
      features: [
        '2 main curries',
        '6 rotis AND rice',
        'Dal, salad & pickle',
        'Monday to Saturday delivery',
        'Lunch AND Dinner',
        'Menu variety',
        'Cancel anytime after 1 month',
      ],
    },
    {
      name: 'Premium Plan',
      price: 6500,
      period: 'month',
      meals: '3 meals/day',
      popular: false,
      features: [
        '3 main curries',
        '8 rotis AND rice',
        'Dal, salad, pickle & raita',
        'All 7 days delivery',
        'Breakfast, Lunch & Dinner',
        'Premium menu variety',
        'Special desserts on weekends',
        'Cancel anytime after 1 month',
      ],
    },
  ];

  const chefs = [
    {
      name: 'Priya Sharma',
      cuisine: 'North Indian',
      rating: 4.9,
      subscribers: 120,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Andheri West',
    },
    {
      name: 'Lakshmi Iyer',
      cuisine: 'South Indian',
      rating: 4.8,
      subscribers: 95,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Juhu',
    },
    {
      name: 'Fatima Khan',
      cuisine: 'Mughlai',
      rating: 4.9,
      subscribers: 110,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Bandra',
    },
    {
      name: 'Rajesh Patel',
      cuisine: 'Gujarati',
      rating: 4.7,
      subscribers: 88,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Malad',
    },
  ];

  const sampleMenus = [
    {
      day: 'Monday',
      lunch: 'Dal Makhani, Jeera Rice, 4 Rotis, Salad',
      dinner: 'Paneer Butter Masala, Rice, 4 Rotis, Pickle',
    },
    {
      day: 'Tuesday',
      lunch: 'Chole, Pulao, 4 Rotis, Raita',
      dinner: 'Mixed Veg Curry, Dal, Rice, 4 Rotis',
    },
    {
      day: 'Wednesday',
      lunch: 'Rajma Curry, Rice, 4 Rotis, Salad',
      dinner: 'Palak Paneer, Dal, Rice, 4 Rotis',
    },
    {
      day: 'Thursday',
      lunch: 'Aloo Gobi, Dal, Rice, 4 Rotis',
      dinner: 'Kadai Paneer, Jeera Rice, 4 Rotis, Pickle',
    },
    {
      day: 'Friday',
      lunch: 'Veg Biryani, Raita, Salad',
      dinner: 'Malai Kofta, Dal, Rice, 4 Rotis',
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Tiffin Service Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy healthy, homemade meals delivered daily. Choose from our flexible meal subscription plans.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fresh Daily</h3>
            <p className="text-sm text-gray-600">Prepared fresh every day with quality ingredients</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-sm text-gray-600">Hot meals delivered right on schedule</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Plans</h3>
            <p className="text-sm text-gray-600">Daily, weekly, or monthly subscriptions</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Variety</h3>
            <p className="text-sm text-gray-600">Different menu every day, never boring</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">All plans include fresh, homemade meals with zero compromise on taste</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-brand-orange' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.meals}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-orange">₹{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-brand-orange text-white hover:bg-orange-600'
                      : 'bg-brand-cream text-brand-orange hover:bg-brand-orange hover:text-white'
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Weekly Menu</h2>
            <p className="text-lg text-gray-600">Here's what you can expect from our Standard Plan</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {sampleMenus.map((menu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="font-semibold text-brand-orange">{menu.day}</div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Lunch</p>
                    <p className="text-gray-900">{menu.lunch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Dinner</p>
                    <p className="text-gray-900">{menu.dinner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Menu varies based on chef and cuisine preference. This is just a sample.
          </p>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tiffin Providers</h2>
            <p className="text-lg text-gray-600">Choose from our top-rated home chefs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all cursor-pointer"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{chef.name}</h3>
                <p className="text-sm text-brand-orange mb-2">{chef.cuisine}</p>
                <p className="text-sm text-gray-600 mb-3">{chef.location}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{chef.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{chef.subscribers} subscribers</div>
                </div>
                <button className="w-full py-2 bg-brand-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-all">
                  View Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-orange to-orange-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How Tiffin Service Works
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Choose Your Plan</h3>
                  <p className="text-gray-600">Select a plan that fits your needs and budget</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pick Your Chef</h3>
                  <p className="text-gray-600">Browse chefs and choose based on cuisine preference</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Set Delivery Time</h3>
                  <p className="text-gray-600">Choose when you want your meals delivered</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enjoy Daily Meals</h3>
                  <p className="text-gray-600">Fresh, hot meals delivered to your doorstep</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg">
                Start Your Subscription
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-cream rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I pause my subscription?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you can pause your subscription for up to 2 weeks. Just notify us 24 hours in advance.
              </p>
            </details>
            <details className="bg-white rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I customize the menu?
              </summary>
              <p className="mt-2 text-gray-600">
                Absolutely! You can discuss your preferences with your chosen chef and customize the menu.
              </p>
            </details>
            <details className="bg-white rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What are the delivery timings?
              </summary>
              <p className="mt-2 text-gray-600">
                Lunch: 12 PM - 1 PM, Dinner: 7 PM - 8 PM. You can request different timings based on availability.
              </p>
            </details>
            <details className="bg-white rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Is there a minimum commitment?
              </summary>
              <p className="mt-2 text-gray-600">
                Monthly plans require a minimum 1-month commitment. After that, you can cancel anytime.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
