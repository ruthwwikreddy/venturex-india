/*
  # Initial Schema Setup

  1. New Tables
    - contacts
      - For storing contact form submissions
      - Includes status tracking
    - newsletter_subscribers
      - For managing newsletter subscriptions
  
  2. Security
    - Enable RLS on all tables
    - Add policies for insert operations
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed'))
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for contacts
CREATE POLICY "Allow anonymous insert to contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for newsletter_subscribers
CREATE POLICY "Allow anonymous insert to newsletter_subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);