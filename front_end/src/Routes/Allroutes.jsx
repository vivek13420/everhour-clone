import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/home" element={"home"} />
              <Route path="/pricing" element={"pricing"} />
              <Route path="/demo" element={"demo"} />
              <Route path="login" element={"login"} />
              <Route path="/signup" element={"signup"} />
              <Route path="/dashboard" element={"dashboard"}/>
          </Routes> 


    </div>
  )
}

export default Allroutes