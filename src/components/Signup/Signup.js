import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [error1, setError] = useState('');
     const navigate = useNavigate('');

     const [createUserWithEmailAndPassword, error, user] = useCreateUserWithEmailAndPassword(auth);


     const handleEmailBlur = event => {
          setEmail(event.target.value)
     }
     const handlePassBlur = event => {
          setPassword(event.target.value)
     }
     const handleConfrimPassBlur = event => {
          setConfirmPassword(event.target.value)
     }

     if (user) {
          navigate('/shop')
     }

     const handleCreateUser = event => {
          event.preventDefault()
          if (password !== confirmPassword) {
               setError("Your two passwords did't match")
               return
          }
          if (password.length < 6) {
               setError("Password must be 6 caracter")
               return;
          }

          createUserWithEmailAndPassword(email, password);
     }
     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form onSubmit={handleCreateUser}>
                         <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="password">Password</label>
                              <input onBlur={handlePassBlur} type="password" name="password" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="password">Confirm Password</label>
                              <input onBlur={handleConfrimPassBlur} type="password" name="confirm-password" id="" required />
                         </div>

                         <p style={{ color: "red" }}>{error1}</p>
                         <input className='form-submit' type="submit" value="Sign up" />
                    </form>
                    <p className='form-link-container'>
                         Already have an account?
                         <Link className='form-link' to="/login">Create Login</Link>
                    </p>
                    <div className='or-container'>
                         <p className='border'></p>
                         <p className='or'>or</p>
                         <p className='border'></p>
                    </div>
                    <p className='google-link'>
                         <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" />
                         <p>Continue with Google</p>
                    </p>
               </div>
          </div>
     );
};

export default Signup;