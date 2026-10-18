import { supabase } from './lib/supabaseClient';

function validateLogin() {

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    (async () => {

        const {data, error} = await supabase.from('user_data').select('*').eq('username', username);
        // returns an array of all the records found

        if (error) console.error(error);

        if (data.length === 0) {
            // user does not exist
            console.log('user does not exist');
        } else if (data[0].password !== password) {
            // wrong password
            console.log('wrong password');
        } else {
            // successful login
            console.log('successful login');
        }

    })()

}

document.getElementById('loginButton').addEventListener('click', e => {
    document.getElementById('centreContainer').innerHTML = `

    <div style="background-color: var(--dark-bg); width: 60%; aspect-ratio: 4 / 3; display: flex; flex-direction: column;">

        <div style="height: calc(100% / 3);">
            <label for="usernameInput">Username: </label>
            <input type="text" id="usernameInput"></input>        
        </div>

        <div style="height: calc(100% / 3);">
            <label for="passwordInput">Password: </label>
            <input type="password" id="passwordInput"></input>
        </div>

        <div style="height: calc(100% / 3);">
            <button id="loginSubmit" type="button">Login</button>
        </div>

    </div>
    `;

    document.getElementById('loginSubmit').addEventListener('click', validateLogin);
})
