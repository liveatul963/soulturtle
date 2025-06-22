/*
  # Create categories table

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `title` (text)
      - `icon_name` (text)
      - `emoji` (text)
      - `description` (text)
      - `bg_color` (text)
      - `hover_bg` (text)
      - `accent_color` (text)

  2. Security
    - Enable RLS on `categories` table
    - Add policy for public read access to categories
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  icon_name text NOT NULL,
  emoji text NOT NULL,
  description text NOT NULL,
  bg_color text NOT NULL,
  hover_bg text NOT NULL,
  accent_color text NOT NULL
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Allow public read access to categories
CREATE POLICY "Categories are publicly readable"
  ON categories
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO categories (title, icon_name, emoji, description, bg_color, hover_bg, accent_color) VALUES
  ('Love & Relations', 'Heart', '💕', 'Navigate the beautiful complexity of human connection', 'bg-gradient-to-br from-rose-100/80 to-pink-100/60', 'group-hover:from-rose-200/90 group-hover:to-pink-200/70', 'text-rose-700'),
  ('Life Purpose', 'Compass', '🧭', 'Discover your unique path', 'bg-gradient-to-br from-amber-100/80 to-orange-100/60', 'group-hover:from-amber-200/90 group-hover:to-orange-200/70', 'text-amber-700'),
  ('Inner Peace', 'Moon', '🕯️', 'Find calm in the storm', 'bg-gradient-to-br from-indigo-100/80 to-purple-100/60', 'group-hover:from-indigo-200/90 group-hover:to-purple-200/70', 'text-indigo-700'),
  ('Personal Growth', 'Star', '🌱', 'Evolve into your fullest self', 'bg-gradient-to-br from-emerald-100/80 to-green-100/60', 'group-hover:from-emerald-200/90 group-hover:to-green-200/70', 'text-emerald-700'),
  ('Career & Creativity', 'Sun', '🎨', 'Align passion with purpose', 'bg-gradient-to-br from-yellow-100/80 to-amber-100/60', 'group-hover:from-yellow-200/90 group-hover:to-amber-200/70', 'text-yellow-700'),
  ('Spiritual Practice', 'Brain', '🧘', 'Deepen your connection to the sacred', 'bg-gradient-to-br from-violet-100/80 to-purple-100/60', 'group-hover:from-violet-200/90 group-hover:to-purple-200/70', 'text-violet-700'),
  ('Healing & Wellness', 'Shield', '🌿', 'Restore balance to mind, body, and spirit', 'bg-gradient-to-br from-teal-100/80 to-cyan-100/60', 'group-hover:from-teal-200/90 group-hover:to-cyan-200/70', 'text-teal-700'),
  ('Energy & Intuition', 'Zap', '⚡', 'Awaken your inner knowing and energetic awareness', 'bg-gradient-to-br from-fuchsia-100/80 to-pink-100/60', 'group-hover:from-fuchsia-200/90 group-hover:to-pink-200/70', 'text-fuchsia-700'),
  ('Nature Connection', 'TreePine', '🌲', 'Find wisdom in the natural world', 'bg-gradient-to-br from-lime-100/80 to-green-100/60', 'group-hover:from-lime-200/90 group-hover:to-green-200/70', 'text-lime-700');