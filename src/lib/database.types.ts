export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
          status: 'pending' | 'contacted' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          message: string
          status?: 'pending' | 'contacted' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          message?: string
          status?: 'pending' | 'contacted' | 'completed'
        }
      }
      idea_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          idea_title: string
          description: string
          problem_solved: string
          target_audience: string
          technology_needed: string
          status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          idea_title: string
          description: string
          problem_solved: string
          target_audience: string
          technology_needed: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          idea_title?: string
          description?: string
          problem_solved?: string
          target_audience?: string
          technology_needed?: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
      }
      service_requests: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          service_type: string
          budget: string
          timeline: string
          idea_overview: string
          existing_progress: string
          status: 'pending' | 'contacted' | 'in_progress' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          service_type: string
          budget: string
          timeline: string
          idea_overview: string
          existing_progress: string
          status?: 'pending' | 'contacted' | 'in_progress' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          service_type?: string
          budget?: string
          timeline?: string
          idea_overview?: string
          existing_progress?: string
          status?: 'pending' | 'contacted' | 'in_progress' | 'completed'
        }
      }
      mentorship_applications: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          expertise_area: string
          availability: string
          interests: string
          status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          expertise_area: string
          availability: string
          interests: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          expertise_area?: string
          availability?: string
          interests?: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
      }
    }
  }
}