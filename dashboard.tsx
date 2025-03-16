import React from "react";
import { useAuth } from "../context/authcontext";

const Dashboard: React.FC = () =>{
    const{user} = useAuth();

    return(
        <div>
            <h1>Dashboard</h1>
            {user?.role=== 'Admin'&& <div>Admin controlos</div>}
            {user?.role=== 'Editor'&& <div>Editor page</div>}
            {user?.role=== 'viewer'&& <div>Read only</div>}
        </div>
    );
};

export default Dashboard;