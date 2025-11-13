import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  role: 'customer' | 'cook' | 'admin';
  avatar_url: string | null;
  address: string | null;
  city: string | null;
  pincode: string | null;
  created_at: string;
  updated_at: string;
};

export type CookProfile = {
  id: string;
  user_id: string;
  bio: string | null;
  cuisines: string[];
  speciality: string | null;
  experience: string | null;
  availability: string | null;
  is_verified: boolean;
  rating: number;
  total_orders: number;
  total_earnings: number;
  created_at: string;
};

export type Dish = {
  id: string;
  cook_id: string;
  name: string;
  description: string | null;
  price: number;
  category: string | null;
  cuisine: string | null;
  image_url: string | null;
  is_vegetarian: boolean;
  is_available: boolean;
  preparation_time: number;
  rating: number;
  total_orders: number;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  customer_id: string;
  cook_id: string;
  dish_id: string;
  quantity: number;
  total_price: number;
  delivery_address: string;
  delivery_city: string | null;
  delivery_pincode: string | null;
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'on_the_way' | 'delivered' | 'cancelled';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_id: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type TiffinSubscription = {
  id: string;
  customer_id: string;
  cook_id: string;
  plan_type: 'basic' | 'standard' | 'premium';
  start_date: string;
  end_date: string;
  delivery_time: string | null;
  delivery_address: string;
  status: 'active' | 'paused' | 'cancelled' | 'expired';
  total_amount: number;
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_id: string | null;
  created_at: string;
  updated_at: string;
};

export type EventOrder = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  location: string;
  cuisine_preference: string | null;
  budget: string | null;
  special_requests: string | null;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  assigned_cooks: string[];
  total_amount: number | null;
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Review = {
  id: string;
  customer_id: string;
  cook_id: string;
  order_id: string | null;
  dish_id: string | null;
  rating: number;
  comment: string | null;
  created_at: string;
};

export type Blog = {
  id: string;
  cook_id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  category: string | null;
  views: number;
  created_at: string;
  updated_at: string;
};
