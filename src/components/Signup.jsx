import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorBox } from './Login';
import { signup } from '../lib/supabaseClient';



const SignupPage = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('signupSubmit').addEventListener('click', handleSignup);
  }, []);

  async function handleSignup() {

      const username = document.getElementById('usernameInput').value;
      const password = document.getElementById('passwordInput').value;
      const confirmPassword = document.getElementById('passwordConfirmInput').value;

      setLoading(true);

      const result = await signup(username, password, confirmPassword);
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
          <input type='password' id='passwordConfirmInput' placeholder="Confirm password..."/>
        </div>

        <div className="loginSection">
          <button id='signupSubmit' style={{width: '100%',}} type='button'>Sign up</button>
        </div>

        <div className="loginSection">
          <p>Got an account? <Link to="/login">Log in!</Link></p>
        </div>

      </div>

      <br />
      {errorMessage && <ErrorBox errorMessage={errorMessage}/>}
    </div>
  )
}

export default SignupPage