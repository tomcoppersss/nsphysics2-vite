import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [session, setSession] = useState(undefined);

    function toEmail(username) {
        return `${username.trim().toLowerCase()}@nsphysics2-vite.thomascopley.workers.dev`;
        /* Supabase auth does not provide native support for just username and password. 
        The simplicity of this project does not require email/pass signup, so a quick workaround is creating a fake email using the project domain. */
    }

    async function login(username, password) {

        // Validation 

        if (username === "" || password === "") {
            return {success: false, errorMessage: 'Please provide all inputs'};
        }

        const { data, error } = await supabase.auth.signInWithPassword(
            {email: toEmail(username), password}
        )
        if (error) {
            return {success: false, errorMessage: error.message}
        } else {
            return {success: true, data: data}
        }
    }

    async function signup(username, password, confirmPassword) {

        // Validation

        if (username === "" || password === "" || confirmPassword === "") {
            return {success: false, errorMessage: 'Please provide all inputs'};
        }

        if (password !== confirmPassword) {
            return {success: false, errorMessage: 'Passwords are not equal'};
        }

        const { data, error } = await supabase.auth.signUp(
            {email: toEmail(username), password, options: {data: { username }}}
        )
        if (error) {
            console.error(error.message, error.status, error.code);
            return {success: false, errorMessage: error.message}
        } else {
            return {success: true, data: data}
        }
    }

    async function logout() {

        const { data, error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
            return {success: false, errorMessage: error.message.message};
        } else {
            return {success: true, data: data};
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }}) => {
            setSession(session);
        })
    }, []
    );

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        })
    }, []
    );

    return (
        <AuthContext.Provider value = {{login, logout, signup, session}}>
            {children}
        </AuthContext.Provider>
    )
}; 

export const UserAuth = () => {
    return useContext(AuthContext);
};

