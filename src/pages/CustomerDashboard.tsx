import { Package, Clock, CheckCircle, Star, MapPin, User } from 'lucide-react';

export default function CustomerDashboard() {
  const activeOrders = [
    {
      id: 'ORD12345',
      dish: 'Butter Chicken with Naan',
      cook: 'Priya Sharma',
      status: 'preparing',
      estimatedTime: '25 mins',
      price: 200,
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 'ORD12344',
      dish: 'Veg Biryani',
      cook: 'Lakshmi Iyer',
      status: 'on-the-way',
      estimatedTime: '10 mins',
      price: 150,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const orderHistory = [
    {
      id: 'ORD12343',
      dish: 'Dal Makhani with Rice',
      cook: 'Rajesh Patel',
      date: '2025-10-26',
      price: 120,
      rating: 5,
    },
    {
      id: 'ORD12342',
      dish: 'Paneer Tikka Masala',
      cook: 'Neha Kapoor',
      date: '2025-10-25',
      price: 140,
      rating: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800';
      case 'on-the-way':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'Preparing';
      case 'on-the-way':
        return 'On the Way';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">My Dashboard</h1>
              <p className="text-white/90">Welcome back, Amit!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
              <Package className="h-10 w-10 text-brand-orange" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <Clock className="h-10 w-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Completed</p>
                <p className="text-2xl font-bold text-gray-900">46</p>
              </div>
              <CheckCircle className="h-10 w-10 text-brand-green" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₹6,840</p>
              </div>
              <Star className="h-10 w-10 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Orders</h2>
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex gap-4">
                      <img
                        src={order.image}
                        alt={order.dish}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{order.dish}</h3>
                            <p className="text-sm text-gray-600">by {order.cook}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{order.estimatedTime}</span>
                          </div>
                          <span className="font-bold text-brand-orange">₹{order.price}</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button className="flex-1 py-2 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-all text-sm font-medium">
                            Track Order
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm font-medium">
                            Contact Chef
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order History</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dish</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{order.dish}</div>
                          <div className="text-sm text-gray-500">{order.cook}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{order.price}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            {[...Array(order.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
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
              <h3 className="font-semibold text-gray-900 mb-4">Saved Addresses</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-brand-cream rounded-lg">
                  <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Home</p>
                    <p className="text-sm text-gray-600">123 Main St, Andheri West, Mumbai - 400053</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-sm text-gray-600">456 Business Park, BKC, Mumbai - 400051</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-brand-orange text-brand-orange rounded-lg hover:bg-brand-cream transition-all">
                Add New Address
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Favorite Chefs</h3>
              <div className="space-y-3">
                {['Priya Sharma', 'Lakshmi Iyer', 'Fatima Khan'].map((chef, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-900">{chef}</span>
                    <button className="text-sm text-brand-orange hover:underline">View Menu</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Tiffin Subscription</h3>
              <p className="text-white/90 text-sm mb-4">Save more with monthly meal plans</p>
              <button className="w-full py-2 bg-white text-brand-orange rounded-lg hover:bg-gray-100 transition-all font-medium">
                Explore Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
