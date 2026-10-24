import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

function toEmail(username) {
    return `${username.trim().toLowerCase()}@users.nsphysics2-vite.workers.dev`;
    /* Supabase auth does not provide native support for just username and password. 
    The simplicity of this project does not require email/pass signup, so a quick workaround is creating a fake email. */
}

export function login(username, password) {
    const { data, error } = supabase.auth.signInWithPassword(
        {email: toEmail(username), password}
    )
    if (error) {
        return {success: false, error: error}
    } else {
        return {success: true, data: data}
    }
}

export function signup(username, password) {
    const { data, error } = supabase.auth.signUp(
        {email: toEmail(username), password, options: {data: username}}
    )
    if (error) {
        return {success: false, error: error}
    } else {
        return {success: true, data: data}
    }
}

export function logout() {
    const { error } = supabase.auth.signOut();
    if (error) return error;
    
}