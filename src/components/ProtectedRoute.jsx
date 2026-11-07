import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {

    const { session } = UserAuth();
    // Determines whether the user is logged in. If not logged in, session is undefined and is therefore falsey
    
    return (
        <>
            {/* If session is defined then children i.e. the content to display is shown. Otherwise user sent to login */}
            {session ? <>{children}</> : <Navigate to="/login" />} 
        </>
    )
}

export default ProtectedRoute