import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../context/AuthContext';

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
  const navigate = useNavigate();

  useEffect(() => {
      document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    }, []);

  async function handleLogin() {
  
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;

        setLoading(true);
        const result = await login(username, password);
        console.log(result);
        if (result.error) {
          setErrorMessage(result.error.message);
          return;
        } else {
          setErrorMessage(null);
        }

        setLoading(false);
        navigate('/simulation');
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