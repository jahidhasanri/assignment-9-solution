import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authLayout/AuthLayout';
import './navbar.css';

const Navbar = () => {
  const { user, handleSingOut, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    handleSingOut()
      .then(() => {
        setUser(null);
        toast.success('Logout successful!');
        setTimeout(() => navigate('/login'), 2000); 
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
      className={`fixed justify-between w-full  items-center mt-1 md:w-full md:mt-0 lg:ml-0  top-0 z-50 md:flex  pt-6 pb-10 lg:px-4 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-400 text-white' : 'bg-slate-200'
      }`}
    >
      <div className="">
      
        <h1 className="text-2xl font-bold text-center md:ml-5 lg:ml-[50px] lg:font-extrabold lg:text-4xl">
          Career Counseling
        </h1>
      </div>
      <div className="text-center md:ml-[10px] 2xl:ml-[250px]  xl:flex gap-10">
     
        <div>
          <NavLink to="/" className="text-xl font-semibold">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile" className="text-xl font-semibold">
            My Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/appoinment" className="text-xl font-semibold">
            Appointment History
          </NavLink>
        </div>
      </div>
      <div className="text-center mt-4 ml-[110px] md: mr-4 2xl:ml-[400px] lg:mr-0  ">
      
        {user && user?.email ? (
          <div
            className="relative flex items-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={user.photoURL || '/default-avatar.png'}
              alt="User Avatar"
            />
            <button onClick={handleLogout} className="btn btn-active btn-neutral">
              Log out
            </button>
            {isHovered && (
              <div className="absolute bg-white text-black rounded p-2 mt-24 shadow-lg">
                <p className="text-sm">{user.displayName || 'Guest User'}</p>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="btn btn-active btn-neutral">
            Login
          </Link>
        )}
      </div>
      {/* ToastContainer */}
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

export default Navbar;