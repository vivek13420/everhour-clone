import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Createteam from '../Pages/Createteamform'
import Onbording from '../Pages/Onbording'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Privateroute from '../utils/PrivateRoute'
import AllRoute from '../Components/Log_Route/Log_Route'

const Allroutes = () => {
  return (
      <div>
        
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/pricing" element={"pricing"} />
              <Route path="/demo" element={"demo"} />
              <Route path="login" element={<Login/>} />
              <Route path="/signup" element={<Signup />} />
               <Route path="/onboarding" element={<Onbording />} />
              <Route path="/dashboard" element={<Privateroute><AllRoute/></Privateroute>}/>
             
          </Routes> 


    </div>
  )
}

export default Allroutes