import { supabase } from './lib/supabaseClient';

export async function validateLogin(username, password) {

    console.log(username, password);
    
    if (username === "" || password === "") {
        return {success: false, errorMessage: 'Please provide all inputs'};
    }

    const {data, error} = await supabase.from('user_data').select('*').eq('username', username);
        // returns an array of all the records found

    if (error) return error;

    if ((data.length) === 0 || (data[0].password !== password)) {
        // user does not exist
        return {success: false, errorMessage: 'Invalid credentials.'};
    } else {
        // successful login
        return {success: true, errorMessage: null};
    }
}
