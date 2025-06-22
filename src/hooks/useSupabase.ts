import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useSupabaseQuery<T>(
  table: string,
  select: string = '*',
  orderBy?: { column: string; ascending?: boolean }
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let query = supabase.from(table).select(select);
        
        if (orderBy) {
          query = query.order(orderBy.column, { ascending: orderBy.ascending ?? true });
        }
        
        const { data: result, error: queryError } = await query;

        if (queryError) {
          throw queryError;
        }

        setData(result || []);
      } catch (err) {
        console.error(`Error fetching ${table}:`, err);
        setError(err instanceof Error ? err.message : `Failed to load ${table}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, select, orderBy?.column, orderBy?.ascending]);

  return { data, loading, error, refetch: () => fetchData() };
}

export function useSupabaseConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('guides').select('count').limit(1);
        setIsConnected(!error);
      } catch (err) {
        setIsConnected(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkConnection();
  }, []);

  return { isConnected, isChecking };
}