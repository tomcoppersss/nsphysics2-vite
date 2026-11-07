import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorBox } from './Login';
import { UserAuth } from '../context/AuthContext';



const SignupPage = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const { session, signup } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('signupSubmit').addEventListener('click', handleSignup);
  }, []);

  useEffect(() => {
    if (session) navigate('/simulation');
  }, [session, navigate]);

  async function handleSignup() {

      const username = document.getElementById('usernameInput').value;
      const password = document.getElementById('passwordInput').value;
      const confirmPassword = document.getElementById('passwordConfirmInput').value;

      setLoading(true);

      const { data, errorMessage } = await signup(username, password, confirmPassword);

      if (errorMessage) {
        console.log(errorMessage);
        setErrorMessage(errorMessage);
        setLoading(false);
      } else {
        setErrorMessage(null);
        setLoading(false);
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