# GharSe - Home-Cooked Food Delivery Platform

**Taste of Home, Delivered**

A full-stack web application connecting home cooks with customers who want healthy, affordable, home-style meals. Built with React, TypeScript, TailwindCSS, and Supabase.

## Features

### For Customers
- Browse dishes by cuisine, price, rating, and location
- Order food from verified home chefs
- Subscribe to tiffin meal plans (daily/weekly/monthly)
- Book catering for parties and events
- Track orders in real-time
- Rate and review dishes and cooks
- Save favorite chefs and addresses

### For Home Cooks
- Create and manage dish listings
- Accept and manage orders
- Build your chef profile with specialties
- View earnings and analytics
- Post recipes and cooking tips
- Offer tiffin subscriptions
- Accept event catering orders

### Platform Features
- **Authentication**: Email/password and Google OAuth via Supabase Auth
- **Role-Based Access**: Customer, Cook, and Admin roles with Row Level Security
- **Real-time Updates**: Order status updates using Supabase Realtime
- **Image Storage**: Dish and profile images via Supabase Storage
- **Secure Payments**: Razorpay integration (test mode ready)
- **Responsive Design**: Mobile-first UI with TailwindCSS
- **Admin Dashboard**: User management, cook verification, analytics

## Tech Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Realtime, Edge Functions)
- **Styling**: TailwindCSS with custom brand colors
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## Database Schema

The application uses the following main tables:

- **profiles**: User information and roles
- **cook_profiles**: Additional chef details
- **dishes**: Menu items
- **orders**: Food orders
- **tiffin_subscriptions**: Meal plans
- **event_orders**: Party/event bookings
- **reviews**: Ratings and comments
- **blogs**: Recipes and articles

All tables have Row Level Security (RLS) policies for secure data access.

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works)
- Git

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd gharse
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Supabase Setup

The database schema is already applied. Your Supabase project includes:

- All database tables with RLS policies
- Authentication configured
- Storage buckets for images

### 4. Environment Variables

Your `.env` file already contains:

\`\`\`env
VITE_SUPABASE_URL=https://hybhjratuaqstvebzatc.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
\`\`\`

### 5. Configure Supabase Storage (Optional)

To enable image uploads, create a storage bucket in your Supabase dashboard:

1. Go to Storage in Supabase Dashboard
2. Create a new bucket named `dish-images`
3. Set it to **public** for read access
4. Add policy to allow authenticated users to upload

### 6. Enable Google OAuth (Optional)

To enable Google sign-in:

1. Go to Authentication > Providers in Supabase Dashboard
2. Enable Google provider
3. Add authorized redirect URLs
4. Configure OAuth consent screen in Google Cloud Console

### 7. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:5173` to see the app.

### 8. Build for Production

\`\`\`bash
npm run build
\`\`\`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy

Your app will be live at `<your-project>.vercel.app`

### Update Supabase Redirect URLs

After deployment, add your production URL to Supabase:

1. Go to Authentication > URL Configuration
2. Add your Vercel URL to **Redirect URLs**

## User Roles

### Customer (Default)
- Created automatically on signup
- Can browse, order, and review food
- Access to customer dashboard

### Cook
- Requires admin approval or self-registration as cook
- Can create dishes and manage orders
- Access to cook dashboard
- Can post blogs and recipes

### Admin
- Manually set in database
- Full access to all data
- User management
- Cook verification
- Analytics dashboard

To create an admin user, update the role in Supabase:

\`\`\`sql
UPDATE profiles SET role = 'admin' WHERE email = 'admin@example.com';
\`\`\`

## API Integration (Future)

### Razorpay Payments

To integrate Razorpay:

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get API keys (use test mode for development)
3. Create a Supabase Edge Function for payment processing
4. Add Razorpay keys to Edge Function secrets

### Google Maps API

To add location features:

1. Get Google Maps API key
2. Add to environment variables
3. Implement location picker in order forms

## Project Structure

\`\`\`
src/
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProtectedRoute.tsx
├── contexts/         # React contexts
│   └── AuthContext.tsx
├── lib/              # Utilities
│   └── supabase.ts
├── pages/            # Page components
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── OrderFoodPage.tsx
│   ├── EventsPage.tsx
│   ├── TiffinPage.tsx
│   ├── BecomeChefPage.tsx
│   ├── CustomerDashboard.tsx
│   ├── CookDashboard.tsx
│   ├── BlogPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── App.tsx           # Main app component
└── main.tsx          # Entry point
\`\`\`

## Key Features Implementation

### Authentication
- Email/password signup and login
- Google OAuth integration
- Protected routes based on user role
- Session management with Supabase

### Database Operations
- Type-safe queries with TypeScript
- Row Level Security for data protection
- Real-time subscriptions for order updates
- Automatic timestamps with triggers

### File Uploads
- Image upload to Supabase Storage
- Public URLs for dish images
- Profile avatar management

### Order Management
- Create, read, update orders
- Status tracking (pending → delivered)
- Real-time updates to both cook and customer

## Color Scheme

- **Primary Orange**: #F97316
- **Success Green**: #22C55E
- **Background Cream**: #FFF7ED

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Support

For issues or questions:
- Email: hello@gharse.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/gharse/issues)

## Roadmap

- [ ] Real-time chat between customers and cooks
- [ ] AI-powered dish recommendations
- [ ] Nutrition information API integration
- [ ] Mobile app (React Native)
- [ ] Multi-city expansion
- [ ] Cook earnings dashboard with charts
- [ ] Automated tiffin renewals
- [ ] Rating-based cook badges
- [ ] PWA support for offline access

---

Built with ❤️ using React, TypeScript, and Supabase
