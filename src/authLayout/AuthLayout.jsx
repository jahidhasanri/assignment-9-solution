import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthLayout = ({children}) => {
    const name='rifat';
    const userInfo = {
        name
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthLayout;