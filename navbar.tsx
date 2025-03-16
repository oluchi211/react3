import React from 'react';
import {Link} from 'react-router-dom';
import  {useAuth} from '../context/authcontext';


const Navbar:React.FC = () =>{
    const{user ,logout} = useAuth();

    if(!user)
        return null;

    return(
        <nav>
            <p>Welcome, {user.username} ({user.role})</p>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">profile</Link>
            {user.role === 'Admin'&& <Link to="/settings">settings</Link>}
            <button onClick={logout}>logout</button>
        </nav>
    );
};

export default Navbar;