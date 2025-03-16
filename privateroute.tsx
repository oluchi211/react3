import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

interface PrivateRouteProps{
    children:ReactNode;
    role?:'Admin';
}

const PrivateRoute: React.FC<PrivateRouteProps> =({children , role}) =>{
    const{user} = useAuth();

    if(!user)
        return<Navigate to="/login"/>;
    if(role && user.role !== role)
        return
    <Navigate to="/dashboard"/>;
    return children
};
export default PrivateRoute;


