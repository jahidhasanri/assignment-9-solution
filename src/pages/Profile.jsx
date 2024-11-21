import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../authLayout/AuthLayout';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify'; 
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  
  const auth = getAuth();

  useEffect(() => {
    if (!user) {
      toast.error("You must be logged in to update your profile.");
    }
  }, [user]);

  const handleSave = () => {
    if (!user) {
      toast.error("User is not logged in.");
      return;
    }

    console.log("User:", user);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success('Profile updated successfully!');
        setEditMode(false);
      })
      .catch((error) => {
        toast.error(`Failed to update profile: ${error.message}`);
      });
  };

  return (
    <div>
      <Helmet>
        <title>profile</title>
      </Helmet>
      <div className='w-11/12  pt-36 md:pt-24 lg:pt-0'>
      <Navbar />
      </div>
    <div className="min-h-screen bg-base-200 flex items-center justify-center mb-2">
      <div className="bg-white shadow-md rounded p-6 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
        <div className="mb-4">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-xl text-center">{user?.email}</p>
          <p className="text-xl text-center font-semibold">{user?.displayName || 'No Name Provided'}</p>
        </div>

        {editMode ? (
          <div>
            <div className="form-control mb-4">
              <label className="label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <button
              onClick={handleSave}
              className="btn btn-primary w-full mt-4"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="btn btn-secondary w-full mt-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="btn btn-primary w-full"
          >
            Edit Profile
          </button>
        )}
      </div>
      
    </div>
    <div className='w-11/12 '>
    <Footer></Footer>
      </div>
    </div>
  );
};

export default Profile;