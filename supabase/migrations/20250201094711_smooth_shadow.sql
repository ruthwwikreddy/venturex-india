/*
  # Create form submission tables

  1. New Tables
    - `idea_submissions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `idea_title` (text)
      - `description` (text)
      - `problem_solved` (text)
      - `target_audience` (text)
      - `technology_needed` (text)
      - `status` (text)

    - `service_requests`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `service_type` (text)
      - `budget` (text)
      - `timeline` (text)
      - `idea_overview` (text)
      - `existing_progress` (text)
      - `status` (text)

    - `mentorship_applications`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `expertise_area` (text)
      - `availability` (text)
      - `interests` (text)
      - `status` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for anonymous submissions
*/

-- Create idea submissions table
CREATE TABLE IF NOT EXISTS idea_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  idea_title text NOT NULL,
  description text NOT NULL,
  problem_solved text NOT NULL,
  target_audience text NOT NULL,
  technology_needed text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Create service requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  idea_overview text NOT NULL,
  existing_progress text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed'))
);

-- Create mentorship applications table
CREATE TABLE IF NOT EXISTS mentorship_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  expertise_area text NOT NULL,
  availability text NOT NULL,
  interests text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Enable RLS
ALTER TABLE idea_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous submissions
CREATE POLICY "Allow anonymous insert to idea_submissions"
  ON idea_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert to service_requests"
  ON service_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert to mentorship_applications"
  ON mentorship_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);