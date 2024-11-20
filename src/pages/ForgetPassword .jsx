import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.config/firebase.config';
import Navbar from '../layouts/Navbar';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);  

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent! Check your inbox.');
          setTimeout(() => {
            window.location.href = 'https://mail.google.com';
          }, 1000); 
        })
        .catch((error) => {
          toast.error(`Error: ${error.message}`);
        })
        .finally(() => {
          setLoading(false); 
        });
    } else {
      toast.warn('Please enter your email address.');
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet><title>forgetpassword</title></Helmet>
      <ToastContainer /> 
      <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Reset Password</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleResetPassword} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Reset Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
