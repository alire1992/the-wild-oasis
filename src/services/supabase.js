import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yailrlnsbtmtsoyroqlj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaWxybG5zYnRtdHNveXJvcWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NTc3NzgsImV4cCI6MjAxNjEzMzc3OH0.c8kQu4FOZFw4z9kHWHRx3czeLY1oaNrV8C0QToprqwI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
