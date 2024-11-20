import React, { useContext, useState } from 'react';
import Navbar from '../layouts/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authLayout/AuthLayout';
import { IoEyeSharp } from 'react-icons/io5';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const {handelRegistWemail,setUser}= useContext(AuthContext)
    const [showPassword,SetShowPassword]=useState(true)
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const handleRegister= (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        handelRegistWemail(email,password)
        .then((result)=>{
            setUser(result.user)
            console.log(result.user);
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
        })

        if(!passwordRegex.test(password)){
            alert('at least Uppercase letter, lower case letter and password length have 6 char')
        }
    }



    return (
        <div>
          <Helmet><title>register</title></Helmet>
            <div className='w-11/12 mx-auto  pt-32 lg:pt-0'>
            <Navbar></Navbar>
            </div>
           
            <div className="hero bg-base-200 min-h-screen mt-9">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':"password"} name='password' placeholder="password" className="input input-bordered" required />
          <button onClick={()=>SetShowPassword(!showPassword)} className='ml-[215px] mt-[55px] absolute'>{showPassword?<HiMiniEyeSlash /> :<IoEyeSharp />}</button>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Have a account? please <Link to='/login' className='text-red-500 border-b-2' >Login</Link> </p>
      </form>
    </div>
  </div>
</div>
  
      <div className='w-11/12 mx-auto'><Footer></Footer></div>

        </div>
    );
};

export default Register;