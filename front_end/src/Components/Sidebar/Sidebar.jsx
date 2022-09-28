import React from 'react'
import { Box, Button, Flex, Image, Link, SimpleGrid, Text, IconButton } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import everhour from "./images/everhour.png"
import { IoLogOutOutline } from "react-icons/io5"
import { HiOutlineHome } from "react-icons/hi";
import { FcMenu } from "react-icons/fc"
import { BsClock } from "react-icons/bs"
import { BiBusSchool } from "react-icons/bi"
import { MdOutlinePersonPin } from "react-icons/md"
import { TbUsers } from "react-icons/tb"
import { FiPieChart } from "react-icons/fi"
import { AiOutlineSetting } from "react-icons/ai"
import {FcBusinessman} from "react-icons/fc"
import {ImProfile} from "react-icons/im"

const Sidebar = () => {
    return (
        <>
            <Box width="100%" >
                <Flex gap={10}>
                    <NavLink to='/'  >
                        <Flex gap={3} mb="1.5em" alignItems="center" >
                            <Image src={everhour} w='25px' />
                            <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' textDecoration='underline' >Everhour</Text>

                        </Flex>
                    </NavLink>
                    {/* <FcMenu  color='#57534e ' fontSize="25px" /> */}

                </Flex>
                <NavLink to="/">
                    <Flex gap={3} mb="1.5em" alignItems="center"  _hover={{bg:"#ccfbf1 "}}  >
                        <HiOutlineHome opacity={0.8} color='#57534e ' fontSize="25px" />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Home</Text>
                    </Flex>
                </NavLink>
                <NavLink to="/time">
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}}>
                        <BsClock color='#57534e ' opacity={0.8} fontSize="23px" />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Time</Text>
                    </Flex>
                </NavLink>
                <NavLink to='/project' >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <BiBusSchool fontSize="23px" opacity={0.8} color='#57534e' />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Projects</Text>
                    </Flex>
                </NavLink>
                <NavLink to='/client'>
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <MdOutlinePersonPin fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Clients</Text>
                    </Flex>
                </NavLink>
                <NavLink to="team">
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <TbUsers fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Team</Text>
                    </Flex>
                </NavLink>
                <NavLink to="report" >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <FiPieChart fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Reports</Text>
                    </Flex>
                </NavLink>
                <Box border={'0.5px solid pink'} mb="1em" ></Box>
                <NavLink to="/setting" >
                    <Flex gap={3} mb="1em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <AiOutlineSetting fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Settings</Text>
                    </Flex>
                </NavLink>

                <Box border={'0.5px solid pink'} mb="1em" ></Box>

                <NavLink to="/profile" >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <ImProfile fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >My Profile</Text>
                    </Flex>
                </NavLink>

                <NavLink to="/signout" >
                    <Flex gap={3} mb="2em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <IoLogOutOutline fontSize="23px" color='#57534e' opacity={0.8} />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm' >Sign Out</Text>
                    </Flex>
                </NavLink>

                <Box border={'0.5px solid pink'} mb="1em" ></Box>
                <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <FcBusinessman fontSize="25px"  />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='md' >Pravhat Ray</Text>
                    </Flex>



            </Box>


        </>
    )
}

export default Sidebar