
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'

const SUPABASE_URL = "https://qebaycbjgyagifdpgjpk.supabase.co"
const SUPABASE_ANON_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYmF5Y2JqZ3lhZ2lmZHBnanBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MzI1NzEsImV4cCI6MjA2MTAwODU3MX0.xmxUmWpkACiTFdNIUooej7l8TplcYAx5iUSlJiQudMs";

const secureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) =>
    SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: secureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
