import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fmqrovkgeajbtxvwnrcc.supabase.co';
const supabaseAnonKey = 'sb_publishable_maOa--qRICMgevgrYjOzqg_b4h1cgqU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
