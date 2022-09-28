import React from 'react'
import { Box, Button, Flex, Image, Link, SimpleGrid, Text} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'


const links=[

    {
        path:"/",
        title:"Home"
    },
    {
        path:"/time",
        title:"Time"
    },
    {
        path:"project",
        title:"Projects"
    },
    {
        path:"client",
        title:"Clients"
    },
    {
        path:"team",
        title:"Team"
    },
    {
        path:"report",
        title:"Reports"
    },
    {
        path:"setting",
        title:"Settings"
    },
    {
        path:"profile",
        title:"Profile"
    },
    {
        path:"signout",
        title:"Sign-Out"
    }

]




const Sidebar = () => {
  return (
    <>
    <Flex flexDirection="column">
        {
            links.map((link)=>{
                return(
                    <>
                    <NavLink key={link.path} to={link.path} >
                        <Box >
                            <Text color="teal" fontWeight="semibold"  textAlign='center'>
                            {link.title}
                        </Text> 
                        </Box>
                       
                    </NavLink>
                    </>
                )
            })
        }
    </Flex>


    </>
  )
}

export default Sidebar