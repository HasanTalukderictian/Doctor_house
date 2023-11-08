import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const { user, loading} = useContext(AuthContext);

    if( loading){
        return <progress className="progress progress-warning w-56" value="70" max="100"></progress>
    }

    if(user?.email ) {
        return children
    }

    return <Navigate to='/login' replace/>
  
};

export default PrivateRoutes;