import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authLayout/AuthLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { handelLoginWemail, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handelLoginWemail(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Login successful!'); // Success toast
        setUser(result.user);
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Login failed: ${error.message}`); // Error toast
      });

    console.log(email, password);
  };

  return (
    <div>
      <Helmet><title>login</title></Helmet>
      <div className='w-11/12 mx-auto'>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <Navbar />
      </div>
      <div className="hero bg-base-200 min-h-screen mt-14">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link to='/forgetpassword' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account? Please <Link to='/register' className='text-red-500 border-b-2'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
