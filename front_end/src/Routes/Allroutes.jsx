import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Onbording from '../Pages/Onbording'
import Signup from '../Pages/Signup'


import Login from '../Pages/Login'
import Privateroute from '../utils/PrivateRoute'
import { Shared } from '../Components/Log_Route/Shared.jsx'
import Projects from '../Components/Projects/Projects'
import DashboardHome from '../Components/Home/Home'
import Home from "../Pages/Home/Home"
import UserProfileEdit from '../Pages/ProfileEdit'

const Allroutes = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={"pricing"} />
        <Route path="/demo" element={"demo"} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onbording />} />
        <Route path="/dashboard" element={<Privateroute>
          <Shared/>
          </Privateroute> }>
         
            <Route  index element={<DashboardHome />} />
            <Route path="/dashboard/time" element={<h1>time</h1>} />
            <Route path="/dashboard/project" element={<Projects />} />
            <Route path="/dashboard/client" element={<h1>client</h1>} />
            <Route path="/dashboard/team" element={<h1>team</h1>} />
            <Route path="/dashboard/report" element={<h1>report</h1>} />
            <Route path="/dashboard/setting" element={<h1>setting</h1>} />
            <Route path="/dashboard/profile" element={<UserProfileEdit/>} />
            <Route path="/dashboard/signout" element={<h1>signout</h1>} />
         
        </Route>

      </Routes>


    </div>
  )
}

export default Allroutes