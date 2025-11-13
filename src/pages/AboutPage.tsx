import { Heart, Users, Shield, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We ensure every meal is made with fresh ingredients and love',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Supporting local home chefs and bringing communities together',
    },
    {
      icon: Shield,
      title: 'Safety & Hygiene',
      description: 'Strict hygiene standards and regular kitchen inspections',
    },
    {
      icon: TrendingUp,
      title: 'Empowerment',
      description: 'Helping home cooks build sustainable businesses',
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About GharSe</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connecting passionate home cooks with food lovers, one meal at a time. We believe the best food is made with love in home kitchens.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                GharSe was born from a simple observation: the best food we ever ate was always homemade. Whether it was at a friend's house, a family gathering, or our own kitchens, home-cooked meals had something special that restaurants couldn't replicate.
              </p>
              <p>
                We realized there were talented home cooks in every neighborhood who could create amazing food but had no platform to share it. At the same time, busy professionals and students were looking for healthy, affordable, home-style meals.
              </p>
              <p>
                In 2023, we launched GharSe to bridge this gap. Today, we're proud to support over 500 home chefs and have delivered more than 50,000 meals across Mumbai.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Home chef cooking"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Homemade food"
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-cream p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-10 w-10 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To make healthy, affordable, home-cooked food accessible to everyone while empowering talented home cooks to build sustainable businesses from their kitchens.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-orange mb-2">500+</div>
            <div className="text-xl text-gray-900 font-semibold mb-1">Home Chefs</div>
            <div className="text-gray-600">Across Mumbai</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-green mb-2">50K+</div>
            <div className="text-xl text-gray-900 font-semibold mb-1">Orders Delivered</div>
            <div className="text-gray-600">And counting</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-orange mb-2">4.8/5</div>
            <div className="text-xl text-gray-900 font-semibold mb-1">Average Rating</div>
            <div className="text-gray-600">From 10K+ reviews</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join the GharSe Family</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a food lover or a talented home chef, there's a place for you at GharSe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Order Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-orange transition-all">
              Become a Chef
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
