import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dophbywwhltladnftcfh.supabase.co";
const supabaseKey = "sb_publishable_YGlbfsYHxLiGi7xbvpg0yA_WNHPMwPQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
