import { BookOpen, Video, Clock, User, ChefHat } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: 'The Secret to Perfect Butter Chicken',
    author: 'Priya Sharma',
    date: '2025-10-25',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Learn the authentic recipe that has made my butter chicken a customer favorite. The key is in the slow cooking and perfect spice balance.',
  };

  const recipes = [
    {
      title: 'Traditional Dal Makhani Recipe',
      author: 'Rajesh Patel',
      date: '2025-10-24',
      readTime: '10 min',
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Recipe',
    },
    {
      title: 'How to Make Perfect Biryani at Home',
      author: 'Fatima Khan',
      date: '2025-10-23',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Recipe',
    },
    {
      title: 'South Indian Breakfast Favorites',
      author: 'Lakshmi Iyer',
      date: '2025-10-22',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Recipe',
    },
    {
      title: 'Tips for Starting Your Home Kitchen Business',
      author: 'Neha Kapoor',
      date: '2025-10-21',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business',
    },
    {
      title: 'Healthy Meal Prep Ideas for Busy Families',
      author: 'Meera Joshi',
      date: '2025-10-20',
      readTime: '9 min',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tips',
    },
    {
      title: 'The Art of Indian Spice Blending',
      author: 'Anita Banerjee',
      date: '2025-10-19',
      readTime: '11 min',
      image: 'https://images.pexels.com/photos/4198951/pexels-photo-4198951.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tips',
    },
  ];

  const videos = [
    {
      title: 'Quick Paneer Tikka in 15 Minutes',
      author: 'Priya Sharma',
      duration: '15:30',
      views: '12K',
      thumbnail: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Perfect Dosa Making Tutorial',
      author: 'Lakshmi Iyer',
      duration: '10:45',
      views: '8.5K',
      thumbnail: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Street Style Chole Bhature at Home',
      author: 'Simran Kaur',
      duration: '12:20',
      views: '15K',
      thumbnail: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-brand-cream via-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Chef Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recipes, cooking tips, and stories from our home chef community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
          <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 lg:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-brand-cream text-brand-orange text-sm font-medium rounded-full mb-4 w-fit">
                Featured Recipe
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime} read</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-all w-fit">
                Read Full Recipe
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Recipes & Articles</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-brand-orange text-white rounded-lg">All</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">Recipes</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">Tips</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">Business</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white text-brand-orange text-xs font-medium rounded-full">
                    {recipe.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{recipe.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{recipe.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Cooking Videos</h2>
            <button className="text-brand-orange hover:underline">View All Videos</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4">
                      <Video className="h-8 w-8 text-brand-orange" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.author}</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-12 text-center text-white">
          <ChefHat className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Share Your Recipe</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Are you a home chef? Share your recipes and cooking tips with the community
          </p>
          <button className="px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg">
            Submit Your Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
