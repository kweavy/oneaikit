import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uggyeictedmhdmlwvyjy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZ3llaWN0ZWRtaGRtbHd2eWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMTgxMjEsImV4cCI6MjA2MTY5NDEyMX0.zzENGl10H22wpUiram551gFhlrQooKGcfrsZvmVNOqE';

export const supabase = createClient(supabaseUrl, supabaseKey);