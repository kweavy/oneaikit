/*
  # Create articles table with SEO attributes

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text, required) - Article title
      - `slug` (text, unique, required) - URL-friendly version of title
      - `content` (text, required) - Article content in markdown
      - `excerpt` (text) - Short description for meta tags
      - `meta_title` (text) - SEO title tag
      - `meta_description` (text) - SEO meta description
      - `keywords` (text[]) - SEO keywords
      - `canonical_url` (text) - Canonical URL if needed
      - `og_title` (text) - Open Graph title
      - `og_description` (text) - Open Graph description
      - `og_image` (text) - Open Graph image URL
      - `twitter_title` (text) - Twitter card title
      - `twitter_description` (text) - Twitter card description
      - `twitter_image` (text) - Twitter card image URL
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `author_id` (uuid) - Reference to users table
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `articles` table
    - Add policies for authenticated users to manage their own articles
    - Add policy for public access to published articles
*/

-- Create articles table
CREATE TABLE articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  excerpt text,
  meta_title text,
  meta_description text,
  keywords text[],
  canonical_url text,
  og_title text,
  og_description text,
  og_image text,
  twitter_title text,
  twitter_description text,
  twitter_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  author_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow authenticated users to create articles
CREATE POLICY "Users can create articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- Allow users to update their own articles
CREATE POLICY "Users can update own articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- Allow users to delete their own articles
CREATE POLICY "Users can delete own articles"
  ON articles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Allow users to read their own articles
CREATE POLICY "Users can read own articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = author_id OR published = true);

-- Allow public access to published articles
CREATE POLICY "Public can read published articles"
  ON articles
  FOR SELECT
  TO anon
  USING (published = true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE
  ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index for faster slug lookups
CREATE INDEX articles_slug_idx ON articles(slug);

-- Create index for faster author lookups
CREATE INDEX articles_author_id_idx ON articles(author_id);

-- Create index for faster published article lookups
CREATE INDEX articles_published_idx ON articles(published) WHERE published = true;