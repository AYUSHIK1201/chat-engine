import React,{useState,useContext,createContext} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from './Auth';
import Dashboard from './Dashboard/Dashboard';
import ChatRoom from './ChatRoom';
import Register from './Register';
import Room from './Room';
import Roomtemp from './Roomtemp';
import ProtectedRoute from './ProtectedRoute';
import FaceTime from './FaceTime';
import { useAuth } from './Context';
const authContext=createContext();
const App=()=>{  
   const [loginStatus,setLoginStatus]=useState(null);
   const [oauth,setOauth]=useState(false);
   const handlelogin=(user)=>{

     setLoginStatus(user);
   }
   const handlelogout=()=>{

     setLoginStatus(null);
     
   }

   const handleoauth=()=>{
     setOauth(true);
   }

   const authvalue={
     loginStatus,
     handlelogin,
     handlelogout,
     oauth,
     handleoauth
     
   }
    return(
    <authContext.Provider value={authvalue}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Auth} />
        <Route exact path="/register"  component={Register} />
        <Route exact path="/facetime"  component={FaceTime} />
        <ProtectedRoute path="/dashboard" component={Dashboard}/>
        <ProtectedRoute path="/dashboard/room/:roomId" component={ChatRoom} />
        <Route path="/room/:roomID" component={Roomtemp}/>
      </Switch>
    </BrowserRouter>
    </authContext.Provider>
    )
}
export default App;
export {authContext};