import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const AllRoute = () => {
  return (
    <Flex gap={"40px"} >
        <Box width="auto" border="2px solid red"  height={''} >
              <Sidebar/> 
        </Box>
        <Box>
            <Routes>
            <Route path="/" element={<h1>Home</h1>}  />
            <Route path="/time" element={<h1>time</h1>}  />
            <Route path="/project" element={<h1>project</h1>}  />
            <Route path="/client" element={<h1>client</h1>}  />
            <Route path="/team" element={<h1>team</h1>}  />
            <Route path="/report" element={<h1>report</h1>}  />
            <Route path="/setting" element={<h1>setting</h1>}  />
            <Route path="/profile" element={<h1>profile</h1>}  />
            <Route path="/signout" element={<h1>signout</h1>}  />
        </Routes>
        </Box>
        
    </Flex>
  )
}

export default AllRoute