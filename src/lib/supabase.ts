import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions based on your database schema
export interface Guide {
  id: string
  created_at: string | null
  name: string
  specialty: string
  avatar_emoji: string
  rating: number | null
  sessions_completed: number | null
  bio: string
  approach: string
  is_available: boolean | null
  gender?: string | null
  level?: string | null
}

export interface Category {
  id: string
  created_at: string | null
  title: string
  icon_name: string
  emoji: string
  description: string
  bg_color: string
  hover_bg: string
  accent_color: string
}