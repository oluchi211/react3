import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "../context/authcontext";
import Navbar from "../components/navbar";
import PrivateRoute from "../components/privateroute";
import Login from './Login';
import Dashboard from "./dashboard";
import Profile from "./profile";
import Settings from "./settings";

const App:React.FC = () =>{
    return(
        <BrowserRouter>
        <AuthProvider>
            <Navbar/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                <Route path="/settings" element={<PrivateRoute role="Admin"><Settings/></PrivateRoute>}/>
            </Routes>
        </AuthProvider>
        </BrowserRouter>
        
    );
};

export default App;