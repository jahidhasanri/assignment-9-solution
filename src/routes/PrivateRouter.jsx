import React, { useContext } from 'react';
import { AuthContext } from '../authLayout/AuthLayout';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location= useLocation();
    console.log(location);
    if(loader){
       return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && user.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;