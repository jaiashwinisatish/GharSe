import { useState } from 'react';
import { Search, Filter, Star, MapPin, Plus } from 'lucide-react';

export default function OrderFoodPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const cuisines = ['All', 'North Indian', 'South Indian', 'Punjabi', 'Bengali', 'Chinese', 'Continental'];
  const priceRanges = ['All', 'Under ₹100', '₹100-₹200', '₹200-₹300', 'Above ₹300'];

  const dishes = [
    {
      id: 1,
      name: 'Butter Chicken with Naan',
      description: 'Creamy tomato-based curry with tender chicken pieces',
      price: 200,
      rating: 4.8,
      reviews: 245,
      cuisine: 'North Indian',
      cook: 'Priya Sharma',
      location: 'Andheri West',
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: false,
      preparationTime: '30 mins',
    },
    {
      id: 2,
      name: 'Dal Makhani with Rice',
      description: 'Slow-cooked black lentils in rich, buttery gravy',
      price: 120,
      rating: 4.7,
      reviews: 189,
      cuisine: 'North Indian',
      cook: 'Rajesh Patel',
      location: 'Bandra East',
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: true,
      preparationTime: '25 mins',
    },
    {
      id: 3,
      name: 'Hyderabadi Biryani',
      description: 'Aromatic basmati rice with spiced meat and saffron',
      price: 180,
      rating: 4.9,
      reviews: 412,
      cuisine: 'Hyderabadi',
      cook: 'Fatima Khan',
      location: 'Powai',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: false,
      preparationTime: '40 mins',
    },
    {
      id: 4,
      name: 'Masala Dosa with Sambar',
      description: 'Crispy rice crepe with potato filling and lentil soup',
      price: 90,
      rating: 4.6,
      reviews: 156,
      cuisine: 'South Indian',
      cook: 'Lakshmi Iyer',
      location: 'Juhu',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: true,
      preparationTime: '20 mins',
    },
    {
      id: 5,
      name: 'Paneer Tikka Masala',
      description: 'Grilled cottage cheese in creamy tomato gravy',
      price: 140,
      rating: 4.7,
      reviews: 198,
      cuisine: 'Punjabi',
      cook: 'Neha Kapoor',
      location: 'Dadar',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: true,
      preparationTime: '30 mins',
    },
    {
      id: 6,
      name: 'Fish Curry with Rice',
      description: 'Traditional Bengali style fish in mustard gravy',
      price: 160,
      rating: 4.5,
      reviews: 134,
      cuisine: 'Bengali',
      cook: 'Anita Banerjee',
      location: 'Goregaon',
      image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: false,
      preparationTime: '35 mins',
    },
    {
      id: 7,
      name: 'Thali Special',
      description: 'Complete meal with 4 curries, rice, roti, and dessert',
      price: 150,
      rating: 4.8,
      reviews: 287,
      cuisine: 'North Indian',
      cook: 'Meera Joshi',
      location: 'Malad',
      image: 'https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: true,
      preparationTime: '35 mins',
    },
    {
      id: 8,
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry with fluffy fried bread',
      price: 110,
      rating: 4.6,
      reviews: 201,
      cuisine: 'Punjabi',
      cook: 'Simran Kaur',
      location: 'Versova',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      vegetarian: true,
      preparationTime: '25 mins',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Order Homemade Food</h1>
          <p className="text-lg text-white/90 mb-6">Fresh, healthy meals from local home cooks</p>

          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for dishes, cuisines, or cooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-brand-orange" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Cuisine</h3>
                <div className="space-y-2">
                  {cuisines.map((cuisine) => (
                    <label key={cuisine} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="cuisine"
                        value={cuisine.toLowerCase()}
                        checked={selectedCuisine === cuisine.toLowerCase()}
                        onChange={(e) => setSelectedCuisine(e.target.value)}
                        className="text-brand-orange focus:ring-brand-orange"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range.toLowerCase()}
                        checked={selectedPrice === range.toLowerCase()}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="text-brand-orange focus:ring-brand-orange"
                      />
                      <span className="ml-2 text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Dietary</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="text-brand-orange focus:ring-brand-orange rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Vegetarian</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="text-brand-orange focus:ring-brand-orange rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Vegan</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="text-brand-orange focus:ring-brand-orange rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Gluten-Free</span>
                  </label>
                </div>
              </div>

              <button className="w-full py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all">
                Clear All Filters
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{dishes.length}</span> dishes
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-brand-orange">
                      ₹{dish.price}
                    </div>
                    {dish.vegetarian && (
                      <div className="absolute top-3 left-3 bg-brand-green text-white px-2 py-1 rounded text-xs font-medium">
                        VEG
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{dish.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dish.description}</p>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{dish.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({dish.reviews})</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{dish.preparationTime}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{dish.cook} • {dish.location}</span>
                    </div>

                    <button className="w-full py-2 bg-brand-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  Previous
                </button>
                <button className="px-4 py-2 bg-brand-orange text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  Next
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
