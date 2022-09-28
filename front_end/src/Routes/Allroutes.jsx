import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createteam from '../Pages/Createteamform'
import Onbording from '../Pages/Onbording'
import Signup from '../Pages/Signup'

const Allroutes = () => {
  return (
      <div>
        
          <Routes>
              <Route path="/home" element={"home"} />
              <Route path="/pricing" element={"pricing"} />
              <Route path="/demo" element={"demo"} />
              <Route path="login" element={"login"} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Onbording" element={<Onbording />} />
        <Route path="/Createteam" element={<Createteam/>}/>
              <Route path="/dashboard" element={"dashboard"}/>
          </Routes> 


    </div>
  )
}

export default Allroutes