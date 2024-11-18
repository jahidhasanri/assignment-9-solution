import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='lg:flex justify-between items-center bg-slate-200 pt-6 pb-6 px-4'>
           <div>
            <h1 className='text-2xl font-bold text-center lg:font-extrabold lg:text-4xl '> Career Counseling</h1>
           </div>
           <div className='text-center lg:flex  gap-10'>
            <div>
            <NavLink to='/' className='text-xl font-semibold '>Home</NavLink>
            </div>
            <div>
            <NavLink className='text-xl font-semibold'>My Profile </NavLink>
            </div>
           </div>
           <div className='text-center mt-4'>
           


        <button className="btn btn-active btn-neutral">Login</button>
           </div>
        </div>
    );
};

export default Navbar;