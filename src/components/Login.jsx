import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLogin } from '../login';
import { login } from '../lib/supabaseClient.js';

export const ErrorBox = (props) => {
  return (
    <div className="errorBox">
      <p>{props.errorMessage}</p>
    </div>
  )
}

const LoginPage = (props) => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
      document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    try {

      const result = await validateLogin(username, password);

      if (result.errorMessage) {
        setErrorMessage(result.errorMessage);
      } else {
        setErrorMessage(null);
        const result = await login(username, password);
        if (result.success) {
          useNavigate('/simulation');
        }
      }

    } catch (err) {
      setErrorMessage('An error occured')
    }
  


  }

  return (
    <div className="centered" style={{width: '12%', height: '20%'}}>
      <div className="loginDiv">

        <div className="loginSection">
          <input type='text' id='usernameInput' placeholder="Username..." />
        </div>

        <div className="loginSection">
          <input type='password' id='passwordInput' placeholder="Password..."/>
        </div>

        <div className="loginSection">
          <button id='loginSubmit' style={{width: '100%',}} type='button' disabled={loading}>Log in</button>
        </div>

        <div className="loginSection">
          <p>New here? <Link to="/signup">Sign up!</Link></p>
        </div>
      </div>
      <br />
      {errorMessage && <ErrorBox errorMessage={errorMessage}/>}
    </div>
  )
}

export default LoginPage