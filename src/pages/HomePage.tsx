import { ArrowRight, Star, Clock, Shield, Heart, Users, CalendarCheck, ChefHat, Utensils, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredDishes = [
    {
      id: 1,
      name: 'Homemade Dal Makhani',
      cook: 'Priya Sharma',
      rating: 4.8,
      price: 120,
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      cuisine: 'North Indian',
    },
    {
      id: 2,
      name: 'Authentic Biryani',
      cook: 'Fatima Khan',
      rating: 4.9,
      price: 180,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      cuisine: 'Hyderabadi',
    },
    {
      id: 3,
      name: 'Traditional Thali',
      cook: 'Lakshmi Iyer',
      rating: 4.7,
      price: 150,
      image: 'https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=800',
      cuisine: 'South Indian',
    },
    {
      id: 4,
      name: 'Paneer Tikka Masala',
      cook: 'Rajesh Patel',
      rating: 4.6,
      price: 140,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      cuisine: 'Punjabi',
    },
  ];

  const topCooks = [
    {
      name: 'Priya Sharma',
      speciality: 'North Indian Cuisine',
      rating: 4.9,
      orders: 1250,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Fatima Khan',
      speciality: 'Mughlai & Biryani',
      rating: 4.8,
      orders: 980,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lakshmi Iyer',
      speciality: 'South Indian',
      rating: 4.9,
      orders: 1100,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const testimonials = [
    {
      name: 'Amit Verma',
      text: 'The food tastes just like home! Fresh, healthy, and so affordable. My go-to for daily lunch.',
      rating: 5,
    },
    {
      name: 'Sneha Desai',
      text: 'Amazing service for my daughter\'s birthday party. The home chef prepared everything perfectly!',
      rating: 5,
    },
    {
      name: 'Rohit Singh',
      text: 'Best tiffin service in the city. Consistent quality and delivery. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Taste of Home,
                <span className="text-brand-orange"> Delivered</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fresh, healthy, homemade meals from local home cooks. Affordable, delicious, and made with love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('order')}
                  className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Order Food Now
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('become-chef')}
                  className="px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg border-2 border-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Become a Home Chef
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-brand-orange">500+</div>
                  <div className="text-sm text-gray-600">Home Chefs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-green">50K+</div>
                  <div className="text-sm text-gray-600">Orders Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-orange">4.8</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Home cooked food"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green text-white p-3 rounded-full">
                    <ChefHat className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fresh Daily</div>
                    <div className="text-sm text-gray-600">Made with love</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Hygienic</h3>
              <p className="text-sm text-gray-600">Fresh, clean, and safe home kitchens</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">On Time Delivery</h3>
              <p className="text-sm text-gray-600">Hot meals delivered on schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-sm text-gray-600">Like mom's cooking, every time</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-cream p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Prices</h3>
              <p className="text-sm text-gray-600">Quality food at great prices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
            <p className="text-lg text-gray-600">Popular homemade meals loved by our customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-brand-orange">
                    ₹{dish.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{dish.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{dish.cuisine}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{dish.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">by {dish.cook}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('order')}
              className="px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
            >
              View All Dishes
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div
              onClick={() => onNavigate('events')}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Party Catering"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <CalendarCheck className="h-10 w-10 text-white mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Party & Events</h3>
                <p className="text-white/90 mb-4">Custom menus for your special occasions</p>
                <span className="text-brand-orange font-semibold flex items-center gap-2">
                  Book Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('tiffin')}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tiffin Service"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <Utensils className="h-10 w-10 text-white mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Tiffin Plans</h3>
                <p className="text-white/90 mb-4">Daily, weekly & monthly meal subscriptions</p>
                <span className="text-brand-orange font-semibold flex items-center gap-2">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('blog')}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef Community"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <Users className="h-10 w-10 text-white mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Chef Community</h3>
                <p className="text-white/90 mb-4">Recipes, tips & cooking videos</p>
                <span className="text-brand-orange font-semibold flex items-center gap-2">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rated Home Chefs</h2>
            <p className="text-lg text-gray-600">Meet our talented home cooks</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topCooks.map((cook, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all"
              >
                <img
                  src={cook.image}
                  alt={cook.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{cook.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{cook.speciality}</p>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{cook.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{cook.orders} orders</div>
                </div>
                <button className="px-4 py-2 bg-brand-cream text-brand-orange font-medium rounded-lg hover:bg-brand-orange hover:text-white transition-all w-full">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from real food lovers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-orange to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Taste Home?</h2>
          <p className="text-xl text-white/90 mb-8">
            Order now and experience the warmth of homemade food
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('order')}
              className="px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Order Food Now
            </button>
            <button
              onClick={() => onNavigate('become-chef')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-orange transition-all"
            >
              Start Cooking
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
