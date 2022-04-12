import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();
     // const [signInWithEmailAndPassword, loading, user, error] = useSignInWithEmailAndPassword(auth);

     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
     const handleEmailBlur = event => {
          setEmail(event.target.value);
     }
     const handlePassBlur = event => {
          setPassword(event.target.value);
     }

     if (user) {
          navigate(from, { replace: true });
     }

     const hanleUserSignIn = event => {
          event.preventDefault();
          signInWithEmailAndPassword(email, password);
     }

     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={hanleUserSignIn}>
                         <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="password">Password</label>
                              <input onBlur={handlePassBlur} type="password" name="password" id="" required />
                         </div>
                         <p style={{ color: 'red' }}>{error?.message}</p>
                         {
                              loading && <p>Loading...</p>
                         }
                         <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p className='form-link-container'>
                         New to Ema-John?
                         <Link className='form-link' to="/signup">Create New Account</Link>
                    </p>
                    <p className='or'>or</p>
                    <p className='google-link'>
                         <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" />
                         <p>Continue with Google</p>
                    </p>
               </div>
          </div>
     );
};

export default Login;