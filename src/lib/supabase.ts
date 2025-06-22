import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Guide {
  id: string
  created_at: string
  name: string
  specialty: string
  avatar_emoji: string
  rating: number
  sessions_completed: number
  bio: string
  approach: string
  is_available: boolean
}

export interface Category {
  id: string
  created_at: string
  title: string
  icon_name: string
  emoji: string
  description: string
  bg_color: string
  hover_bg: string
  accent_color: string
}