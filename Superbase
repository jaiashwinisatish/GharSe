/*
  # GharSe Platform Database Schema

  ## Overview
  Complete database schema for GharSe - Home-Cooked Food Delivery Platform
  
  ## Tables Created
  
  ### 1. profiles
  - Extends Supabase auth.users with user profile information
  - Columns: id, email, full_name, phone, role, avatar_url, address, city, pincode, created_at, updated_at
  - Role types: customer, cook, admin
  
  ### 2. cook_profiles
  - Additional information for home chefs
  - Columns: id, user_id, bio, cuisines, speciality, experience, availability, is_verified, rating, total_orders, created_at
  
  ### 3. dishes
  - Menu items created by cooks
  - Columns: id, cook_id, name, description, price, category, cuisine, image_url, is_vegetarian, is_available, preparation_time, rating, total_orders, created_at
  
  ### 4. orders
  - Food orders from customers
  - Columns: id, customer_id, cook_id, dish_id, quantity, total_price, delivery_address, status, payment_status, created_at, updated_at
  - Status: pending, accepted, preparing, ready, on_the_way, delivered, cancelled
  
  ### 5. tiffin_subscriptions
  - Meal subscription plans
  - Columns: id, customer_id, cook_id, plan_type, start_date, end_date, delivery_time, status, total_amount, created_at
  - Plan types: basic, standard, premium
  
  ### 6. event_orders
  - Party and event catering orders
  - Columns: id, customer_id, event_type, event_date, guest_count, location, cuisine_preference, budget, special_requests, status, assigned_cooks, total_amount, created_at
  
  ### 7. reviews
  - Customer reviews for dishes and cooks
  - Columns: id, customer_id, cook_id, order_id, dish_id, rating, comment, created_at
  
  ### 8. blogs
  - Recipes and articles by cooks
  - Columns: id, cook_id, title, content, image_url, category, views, created_at, updated_at
  
  ## Security
  - RLS enabled on all tables
  - Policies for customers, cooks, and admins
  - Authentication required for all operations
  - Users can only access their own data unless admin
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('customer', 'cook', 'admin');
CREATE TYPE order_status AS ENUM ('pending', 'accepted', 'preparing', 'ready', 'on_the_way', 'delivered', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE plan_type AS ENUM ('basic', 'standard', 'premium');
CREATE TYPE subscription_status AS ENUM ('active', 'paused', 'cancelled', 'expired');
CREATE TYPE event_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled');

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  role user_role DEFAULT 'customer',
  avatar_url TEXT,
  address TEXT,
  city TEXT,
  pincode TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- 2. Cook Profiles Table
CREATE TABLE IF NOT EXISTS cook_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  bio TEXT,
  cuisines TEXT[] DEFAULT '{}',
  speciality TEXT,
  experience TEXT,
  availability TEXT,
  is_verified BOOLEAN DEFAULT false,
  rating NUMERIC(3,2) DEFAULT 0,
  total_orders INTEGER DEFAULT 0,
  total_earnings NUMERIC(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE cook_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view verified cook profiles"
  ON cook_profiles FOR SELECT
  TO authenticated
  USING (is_verified = true);

CREATE POLICY "Cooks can view own profile"
  ON cook_profiles FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid()
  );

CREATE POLICY "Cooks can update own profile"
  ON cook_profiles FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Cooks can insert own profile"
  ON cook_profiles FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- 3. Dishes Table
CREATE TABLE IF NOT EXISTS dishes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cook_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  category TEXT,
  cuisine TEXT,
  image_url TEXT,
  is_vegetarian BOOLEAN DEFAULT true,
  is_available BOOLEAN DEFAULT true,
  preparation_time INTEGER DEFAULT 30,
  rating NUMERIC(3,2) DEFAULT 0,
  total_orders INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available dishes"
  ON dishes FOR SELECT
  TO authenticated
  USING (is_available = true);

CREATE POLICY "Cooks can view own dishes"
  ON dishes FOR SELECT
  TO authenticated
  USING (cook_id = auth.uid());

CREATE POLICY "Cooks can insert own dishes"
  ON dishes FOR INSERT
  TO authenticated
  WITH CHECK (cook_id = auth.uid());

CREATE POLICY "Cooks can update own dishes"
  ON dishes FOR UPDATE
  TO authenticated
  USING (cook_id = auth.uid())
  WITH CHECK (cook_id = auth.uid());

CREATE POLICY "Cooks can delete own dishes"
  ON dishes FOR DELETE
  TO authenticated
  USING (cook_id = auth.uid());

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  cook_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  dish_id UUID REFERENCES dishes(id) ON DELETE SET NULL,
  quantity INTEGER DEFAULT 1,
  total_price NUMERIC(10,2) NOT NULL,
  delivery_address TEXT NOT NULL,
  delivery_city TEXT,
  delivery_pincode TEXT,
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  payment_id TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Customers can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (customer_id = auth.uid());

CREATE POLICY "Cooks can view their orders"
  ON orders FOR SELECT
  TO authenticated
  USING (cook_id = auth.uid());

CREATE POLICY "Customers can create orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Cooks can update their orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (cook_id = auth.uid())
  WITH CHECK (cook_id = auth.uid());

CREATE POLICY "Customers can update own orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (customer_id = auth.uid())
  WITH CHECK (customer_id = auth.uid());

-- 5. Tiffin Subscriptions Table
CREATE TABLE IF NOT EXISTS tiffin_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  cook_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  plan_type plan_type NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  delivery_time TIME,
  delivery_address TEXT NOT NULL,
  status subscription_status DEFAULT 'active',
  total_amount NUMERIC(10,2) NOT NULL,
  payment_status payment_status DEFAULT 'pending',
  payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE tiffin_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Customers can view own subscriptions"
  ON tiffin_subscriptions FOR SELECT
  TO authenticated
  USING (customer_id = auth.uid());

CREATE POLICY "Cooks can view their subscriptions"
  ON tiffin_subscriptions FOR SELECT
  TO authenticated
  USING (cook_id = auth.uid());

CREATE POLICY "Customers can create subscriptions"
  ON tiffin_subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Customers can update own subscriptions"
  ON tiffin_subscriptions FOR UPDATE
  TO authenticated
  USING (customer_id = auth.uid())
  WITH CHECK (customer_id = auth.uid());

-- 6. Event Orders Table
CREATE TABLE IF NOT EXISTS event_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  guest_count INTEGER NOT NULL,
  location TEXT NOT NULL,
  cuisine_preference TEXT,
  budget TEXT,
  special_requests TEXT,
  status event_status DEFAULT 'pending',
  assigned_cooks UUID[],
  total_amount NUMERIC(10,2),
  payment_status payment_status DEFAULT 'pending',
  payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE event_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Customers can view own event orders"
  ON event_orders FOR SELECT
  TO authenticated
  USING (customer_id = auth.uid());

CREATE POLICY "Cooks can view assigned events"
  ON event_orders FOR SELECT
  TO authenticated
  USING (auth.uid() = ANY(assigned_cooks));

CREATE POLICY "Customers can create event orders"
  ON event_orders FOR INSERT
  TO authenticated
  WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Customers can update own event orders"
  ON event_orders FOR UPDATE
  TO authenticated
  USING (customer_id = auth.uid())
  WITH CHECK (customer_id = auth.uid());

-- 7. Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  cook_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
  dish_id UUID REFERENCES dishes(id) ON DELETE SET NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Customers can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Customers can update own reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (customer_id = auth.uid())
  WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Customers can delete own reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (customer_id = auth.uid());

-- 8. Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cook_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  category TEXT,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blogs"
  ON blogs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Cooks can create blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (cook_id = auth.uid());

CREATE POLICY "Cooks can update own blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (cook_id = auth.uid())
  WITH CHECK (cook_id = auth.uid());

CREATE POLICY "Cooks can delete own blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (cook_id = auth.uid());

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_dishes_cook_id ON dishes(cook_id);
CREATE INDEX IF NOT EXISTS idx_dishes_available ON dishes(is_available);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_cook_id ON orders(cook_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_reviews_cook_id ON reviews(cook_id);
CREATE INDEX IF NOT EXISTS idx_reviews_dish_id ON reviews(dish_id);
CREATE INDEX IF NOT EXISTS idx_blogs_cook_id ON blogs(cook_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dishes_updated_at
  BEFORE UPDATE ON dishes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tiffin_subscriptions_updated_at
  BEFORE UPDATE ON tiffin_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_event_orders_updated_at
  BEFORE UPDATE ON event_orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
