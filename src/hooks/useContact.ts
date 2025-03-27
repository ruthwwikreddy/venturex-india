import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (data: ContactForm) => {
    try {
      setLoading(true);
      setError(null);

      const { error: submitError } = await supabase
        .from('contacts')
        .insert([data]);

      if (submitError) throw submitError;

      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, error };
}