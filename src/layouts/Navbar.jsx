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
        setUser(null); // Clear user data after logout
        toast.success('Logout successful!');
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed w-full lg:w-11/12 top-0 z-50 lg:flex justify-between items-center pt-6 pb-8 px-4 transition-colors duration-300 ${
      isScrolled ? 'bg-gray-400 text-white' : 'bg-slate-200'
    }`}
  >
    <ToastContainer 
      position="top-center"/>
    <div className='lg:ml-[-450px]'>
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
      <div className="text-center mt-4 lg:mr-[50px]">
        {user ? (
          <div className="relative flex items-center gap-2 group">
            {/* User Image */}
            <img
              src={user.photoURL || 'https://via.placeholder.com/50'}
              alt="User"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
            {/* Always show logout button */}
            <button onClick={handleLogout} className="btn btn-active btn-neutral">
              Log out
            </button>
            {/* Show user name only on hover */}
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
