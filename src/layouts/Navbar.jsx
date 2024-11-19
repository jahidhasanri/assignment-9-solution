import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../authLayout/AuthLayout';

const Navbar = () => {
 const {user,handleSingOut}=useContext(AuthContext)
//  console.log();
//  console.log(name);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full lg:w-11/12 top-0  z-50 lg:flex justify-between items-center pt-6 pb-6 px-4 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-400 text-white' : 'bg-slate-200'
      }`}
    >
      <div>
        <h1 className='text-2xl font-bold text-center lg:font-extrabold lg:text-4xl'>
          Career Counseling
        </h1>
      </div>
      <div className='text-center lg:flex gap-10'>
        <div>
          <NavLink to='/' className='text-xl font-semibold'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/profile' className='text-xl font-semibold'>
            My Profile
          </NavLink>
        </div>
      </div>
      <div className='text-center mt-4'>
        {
          user? <div>
          <p>{user.email}</p>
          <Link to='/login' onClick={handleSingOut} className="btn btn-active btn-neutral">log out</Link>
        </div>
          :
         
           <Link  to='/login' className="btn btn-active btn-neutral">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
