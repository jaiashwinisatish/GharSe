import { Plus, Edit2, Trash2, TrendingUp, Package, Star, IndianRupee } from 'lucide-react';

export default function CookDashboard() {
  const stats = {
    totalOrders: 156,
    activeOrders: 5,
    earnings: 45600,
    rating: 4.8,
  };

  const dishes = [
    {
      id: 1,
      name: 'Butter Chicken with Naan',
      price: 200,
      category: 'North Indian',
      available: true,
      orders: 48,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Dal Makhani with Rice',
      price: 120,
      category: 'North Indian',
      available: true,
      orders: 62,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Paneer Tikka',
      price: 140,
      category: 'Punjabi',
      available: false,
      orders: 35,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'Amit V.', dish: 'Butter Chicken', amount: 200, status: 'pending' },
    { id: 'ORD002', customer: 'Sneha D.', dish: 'Dal Makhani', amount: 120, status: 'preparing' },
    { id: 'ORD003', customer: 'Rohit S.', dish: 'Paneer Tikka', amount: 140, status: 'ready' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-brand-green to-green-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Chef Dashboard</h1>
          <p className="text-white/90">Welcome back, Priya Sharma!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
              <Package className="h-10 w-10 text-brand-orange" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
              </div>
              <TrendingUp className="h-10 w-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.earnings.toLocaleString()}</p>
              </div>
              <IndianRupee className="h-10 w-10 text-brand-green" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.rating}</p>
              </div>
              <Star className="h-10 w-10 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">My Dishes</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-all">
                  <Plus className="h-5 w-5" />
                  Add New Dish
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {dishes.map((dish) => (
                  <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <Edit2 className="h-4 w-4 text-gray-700" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${dish.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {dish.available ? 'Available' : 'Unavailable'}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{dish.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{dish.category}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-brand-orange">₹{dish.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{dish.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {dish.orders} orders completed
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Orders</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dish</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{order.dish}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-sm text-brand-orange hover:underline">
                            {order.status === 'pending' ? 'Accept' : 'Update'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-all">
                  Add New Dish
                </button>
                <button className="w-full py-3 border border-brand-orange text-brand-orange rounded-lg hover:bg-brand-cream transition-all">
                  View All Orders
                </button>
                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                  Update Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Earnings This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Gross Earnings</span>
                  <span className="font-bold">₹12,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Platform Fee (15%)</span>
                  <span className="font-bold text-red-500">-₹1,860</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">Net Earnings</span>
                    <span className="font-bold text-brand-green text-xl">₹10,540</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Reviews</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.8</span>
                <span className="text-sm text-gray-600">(124 reviews)</span>
              </div>
              <button className="text-sm text-brand-orange hover:underline">View All Reviews</button>
            </div>

            <div className="bg-gradient-to-br from-brand-green to-green-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Become an Event Chef</h3>
              <p className="text-white/90 text-sm mb-4">Accept party and event catering orders</p>
              <button className="w-full py-2 bg-white text-brand-green rounded-lg hover:bg-gray-100 transition-all font-medium">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
