import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { validateSignup } from '../signup';
import { ErrorBox } from './Login';

const SignupPage = () => {

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    document.getElementById('signupSubmit').addEventListener('click', handleSignup);
  }, []);

  async function handleSignup() {
  
      const result = await validateSignup();
  
      if (result.errorMessage) {
        setErrorMessage(result.errorMessage);
      } else {
        setErrorMessage(null);
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