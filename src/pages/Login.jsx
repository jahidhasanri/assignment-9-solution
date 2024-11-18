import React, { createContext, useContext } from 'react';
import Navbar from '../layouts/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authLayout/AuthLayout';

const Login = () => {
    const {handelLoginWemail,setUser}=useContext(AuthContext)
    const handelLogin = (e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        handelLoginWemail(email,password)
        .then((result)=>{
            console.log(result);
            setUser(result)
        })
        .catch((error)=>{
            console.log(error);
        })

        console.log(email,password);
    }
    return (
        <div>
            <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't have an account?please <Link to='/register' className='text-red-500 border-b-2' >Register</Link> </p>
      </form>
    </div>
  </div>
</div>



        </div>
    );
};

export default Login;