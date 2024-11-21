import React, { useContext, useState } from 'react';
import Navbar from '../layouts/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authLayout/AuthLayout';
import { IoEyeSharp } from 'react-icons/io5';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { handelRegistWemail, setUser, updateUserProfile ,handelLoginWithGoogle} = useContext(AuthContext);
  const [showPassword, SetShowPassword] = useState(true);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      return;
    }

    handelRegistWemail(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result);
        updateUserProfile({ displayName: name, photoURL: photo });
        toast.success('Registration successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    handelLoginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success('Login with Google successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Career Pathways || Register</title>
      </Helmet>
      <div className="w-11/12  pt-36 xl:pt-0">
        <Navbar />
      </div>

      <div className="hero bg-base-200 min-h-screen mt-9">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => SetShowPassword(!showPassword)}
                  className="absolute top-[50px] right-3 text-xl"
                >
                  {showPassword ? <HiMiniEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Have an account? Please{' '}
                <Link to="/login" className="text-red-500 border-b-2">
                  Login
                </Link>
              </p>
            </form>
            <div className="form-control mt-4 w-8/12 mx-auto mb-10">
              <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">
              <FcGoogle/>
              Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <Footer />
      </div>

     
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;