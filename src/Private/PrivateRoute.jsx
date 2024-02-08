import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
  
    if(loading){
        return <Spinner/>
    }
    if(user){
        return children;
    }
    return <Navigate to="/sign-in"></Navigate>
};

export default PrivateRoute;