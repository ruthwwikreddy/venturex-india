import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      const { error: submitError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (submitError) throw submitError;

      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error };
}