import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
     const [user] = useAuthState(auth);
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [phone, setPhone] = useState('');
     const [error, setError] = useState('');
     // const navigate = useNavigate('');

     const handleNameBlur = event => {
          setName(event.target.value);
     }

     const handleAddressBlur = event => {
          setAddress(event.target.value);
     }

     const handlePhoneBlur = event => {
          setPhone(event.target.value);
     }

     const handleCreateUser = event => {
          event.preventDefault()
          const shipping = (name, email, address, phone);
          console.log(shipping);

     }

     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleCreateUser}>
                         <div className="input-group">
                              <label htmlFor="name">Your Name</label>
                              <input value={user?.displayName} onBlur={handleNameBlur} type="text" name="" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="email">Your Email</label>
                              <input value={user?.email} readOnly type="email" name="" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="address">Your Address</label>
                              <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="phone">Your Phone</label>
                              <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
                         </div>

                         <p style={{ color: "red" }}>{error}</p>
                         <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>

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

export default Shipment;