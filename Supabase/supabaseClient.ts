import { createClient } from "@supabase/supabase-js";

// For React Native/Expo, you need to use a different approach
const SUPABASE_URL = "https://rtdoakcdwatbeadzjyqy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0ZG9ha2Nkd2F0YmVhZHpqeXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1OTQ4ODQsImV4cCI6MjA3MTE3MDg4NH0.6UgxZEYXjuNGIRFIa7928cxiRO9T5qvA_GgccQlreEg";

// Add error checking
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL and Anon Key are required");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
