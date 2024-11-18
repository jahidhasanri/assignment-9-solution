import React, { useContext } from 'react';
import Navbar from '../layouts/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authLayout/AuthLayout';

const Register = () => {
    const {handelRegistWemail,setUser}= useContext(AuthContext)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const handleRegister= (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        handelRegistWemail(email,password)
        .then((result)=>{
            setUser(result)
            console.log(result);
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
            <div className='w-11/12 mx-auto'>
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Have a account? please <Link to='/login' className='text-red-500 border-b-2' >Login</Link> </p>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Register;