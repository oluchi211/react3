import React, { useState } from "react";
import { useAuth } from "../context/authcontext";

const Login:React.FC = () => {
    const{login} = useAuth();
    const [username ,setusername] = useState('');
    const[role , setrole] = useState<'Admin'|'Editor'|'viewer'>('viewer');

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        login({username , role});
    };
     return(
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={(e) => setusername(e.target.value)}placeholder="username" required/>
            <select value={role} onChange={(e) =>setrole(e.target.value as any)}>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="viewer">viewer</option>
            </select>
            <button type="submit">login</button>
        </form>
     );
};
 export default Login;