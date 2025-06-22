/*
  # Create guides table

  1. New Tables
    - `guides`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `specialty` (text)
      - `avatar_emoji` (text)
      - `rating` (numeric)
      - `sessions_completed` (integer)
      - `bio` (text)
      - `approach` (text)
      - `is_available` (boolean)

  2. Security
    - Enable RLS on `guides` table
    - Add policy for public read access to guides
*/

CREATE TABLE IF NOT EXISTS guides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  specialty text NOT NULL,
  avatar_emoji text NOT NULL,
  rating numeric(2,1) DEFAULT 4.5 CHECK (rating >= 0 AND rating <= 5),
  sessions_completed integer DEFAULT 0 CHECK (sessions_completed >= 0),
  bio text NOT NULL,
  approach text NOT NULL,
  is_available boolean DEFAULT true
);

ALTER TABLE guides ENABLE ROW LEVEL SECURITY;

-- Allow public read access to guides
CREATE POLICY "Guides are publicly readable"
  ON guides
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO guides (name, specialty, avatar_emoji, rating, sessions_completed, bio, approach, is_available) VALUES
  ('Luna', 'Intuitive Guidance & Dreams', '🌙', 4.9, 1247, 'I help you decode the whispers of your intuition and find meaning in your dreams.', 'Gentle, mystical, with a touch of cosmic humor', true),
  ('River', 'Life Transitions & Flow', '🌊', 4.8, 892, 'Together we''ll navigate life''s currents and find your natural rhythm.', 'Fluid, adaptive, grounded in nature''s wisdom', false),
  ('Phoenix', 'Transformation & Rebirth', '🔥', 4.9, 1456, 'I guide souls through profound transformation and help you rise renewed.', 'Bold, transformative, deeply healing', true),
  ('Sage', 'Ancient Wisdom & Modern Life', '🌿', 4.7, 2103, 'Bridging timeless wisdom with today''s challenges for practical enlightenment.', 'Wise, practical, refreshingly down-to-earth', true),
  ('Aurora', 'Energy Healing & Chakras', '✨', 4.8, 967, 'I work with your energy centers to restore balance and unlock your natural vitality.', 'Intuitive, healing-focused, deeply empathetic', true),
  ('Ocean', 'Emotional Depth & Healing', '🌊', 4.9, 1834, 'Dive deep into your emotional landscape and emerge with clarity and peace.', 'Compassionate, patient, profoundly understanding', true);