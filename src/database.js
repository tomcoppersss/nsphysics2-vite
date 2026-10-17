import { supabase } from './lib/supabaseClient';

console.log('db');

(async () => {
    const response = await supabase.from('user_data').select('*');
    console.log(response);
})()