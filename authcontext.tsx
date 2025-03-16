import React,{createContext ,useState , ReactNode ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';

  interface user{
  username:string; 
  role: 'Admin'|'Editor'|'viewer';
 }

 interface AuthContextType{
    user:user|null;
    login:(user:user) =>void;
    logout:() => void;
 }

 const AuthContext = createContext<AuthContextType|undefined>(undefined);
 export const AuthProvider: React.FC<{children:ReactNode}> =({children}) => {
    const[user ,setuser] = useState<user | null>(null);
    const navigate = useNavigate();

    const login = (user:user) =>{
        setuser(user);
        navigate('/dashboard');
    };

    const logout = () => {
        setuser(null);
        navigate('/login');
    };
    return(
        <AuthContext.Provider value={{user, login,logout}}>
            {children}
        </AuthContext.Provider>   
     );
 };
 
 
 export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an authprovider");
    return context;
 };
