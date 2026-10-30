// Not used!! Kept for now in case needed.


import { supabase } from './lib/supabaseClient';

export async function validateSignup() {

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('passwordConfirmInput').value;

    if (username === "" || password === "" || confirmPassword === "") {
        return {success: false, errorMessage: 'Please provide all inputs'};
    }

    if (password !== confirmPassword) {
        return {success: false, errorMessage: 'Passwords are not equal'};
    }

    // passwords are correct here

    const {data, error} = await supabase.from('user_data').select('*').eq('username', username);
    // returns an array of all the records found

    if (error) return error;

    if (data.length === 0) {
        // valid username
        return {success: true, errorMessage: null};
    } else {
        return {success: false, errorMessage: 'This username is already taken'};
    }
}
