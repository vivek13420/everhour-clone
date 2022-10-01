import { Box, Divider, Flex, Hide, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Humber from '../Sidebar/Humber'
import Sidebar from '../Sidebar/Sidebar'
import everhour from "../Sidebar/images/everhour.png"
import Projects from '../Projects/Projects'
// dsfsdfsdfsd
const Log_Route = () => {
  return (
    <>
        <Box>
          <Show below='md'>
            <Humber />
          </Show>
        </Box>
      <Flex gap={"40px"} >
        <Box width="14.5%" p={5} position="fixed">
          <Hide below='md'>
            <Sidebar />
          </Hide>
        </Box>


<Hide below='md'>
        <Box  ml="17%" width={'100%'} >
          <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="time" element={<h1>time</h1>} />
            <Route path="project" element={<Projects/>} />
            <Route path="client" element={<h1>client</h1>} />
            <Route path="team" element={<h1>team</h1>} />
            <Route path="report" element={<h1>report</h1>} />
            <Route path="setting" element={<h1>setting</h1>} />
            <Route path="profile" element={<h1>profile</h1>} />
            <Route path="signout" element={<h1>signout</h1>} />
          </Routes>
        </Box>
</Hide>

      </Flex>

      <Show below='md'>
        <Box border="2px solid red"  width={'100%'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/time" element={<h1>time</h1>} />
            <Route path="/project" element={<Projects/>} />
            <Route path="/client" element={<h1>client</h1>} />
            <Route path="/team" element={<h1>team</h1>} />
            <Route path="/report" element={<h1>report</h1>} />
            <Route path="/setting" element={<h1>setting</h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
            <Route path="/signout" element={<h1>signout</h1>} />
          </Routes>
        </Box>
</Show>
    </>
  )
}

export default Log_Route