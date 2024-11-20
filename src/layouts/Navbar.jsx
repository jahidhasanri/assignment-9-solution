import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authLayout/AuthLayout';
import './navbar.css';

const Navbar = () => {
  const { user, handleSingOut, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    handleSingOut()
      .then(() => {
        setUser(null);
        toast.success('Logout successful!');
        navigate('/login'); 
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  
  useEffect(() => {
    const handleScroll = () => {
     
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed mt-1 md:mt-0 md: lg:ml-0  md: w-11/12 top-0 z-50 md:flex justify-between items-center pt-6 pb-8 px-4 transition-colors duration-300 ${
      isScrolled ? 'bg-gray-400 text-white' : 'bg-slate-200'
    }`}
  >
    <ToastContainer 
      position="top-center"/>
    <div className='lg:ml-[-350px]'>
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
      <div>
        <NavLink to='/appoinment' className='text-xl font-semibold'>
        Appointment History
        </NavLink>
      </div>
    </div>
      <div className="text-center mt-4 ml-28 lg:ml-0  lg:mr-[50px]">
        {user ? (
          <div className="relative flex items-center gap-2 group">
           
            <img
              src={user.photoURL || 'https://via.placeholder.com/50'}
              alt="User"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
            
            <button onClick={handleLogout} className="btn btn-active btn-neutral">
              Log out
            </button>
          
            <div className="user-name-tooltip hidden group-hover:block absolute bg-white text-black rounded p-2 mt-20">
              <p className="text-sm">{user.displayName || 'User'}</p>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-active btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
