import { supabase } from './lib/supabaseClient';

console.log('db');

(async () => {
    const {data, error} = await supabase.from('user_data').select('*').eq('user_id', 1);
    console.log(data);
    if (error) console.error(error);
})()