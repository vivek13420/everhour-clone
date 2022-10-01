import React, { useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Hide,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'


const getUsers = async () => {
  let res = await axios.get(`https://cloneofeverhour.herokuapp.com/users?r=employee`)
  return res
}

const ProjectList = ({ prodata,removePro,handleToggle}) => {

  const [empuser, setEmpUser] = useState([])
  const [team,setTeam]=useState([])

  const userdata = () => {
    getUsers().then((res) => {
       console.log("users2list",res.data);
      setEmpUser(res.data)
    })
  }
  // console.log("employe", empuser);
  // useEffect(() => {
  //   userdata()
  // }, [])


const handleClick=()=>{
  userdata()
}
const handleTeam=async (id)=>{
  console.log("id",id);

const res = await axios.patch(`https://cloneofeverhour.herokuapp.com/projects/${id}`,{teamMembers:id});
console.log(res);
}
  return (
    <>

      <Box>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>

                <Th>Project Name</Th>
                <Th>Team Members</Th>
                <Hide below='md'>
                  <Th>Budget</Th>
                </Hide>
                <Th>Status</Th>
                <Th>Remove</Th>
                <Th>Toggle</Th>


              </Tr>
            </Thead>
            <Tbody>
              {
                prodata.map((e) => {
                  return (
                    <Tr>
                      <Td>{e.title}</Td>
                      <Td>
                        <Menu closeOnSelect={true}>
                          <MenuButton onClick={handleClick} as={Button} rightIcon={<ChevronDownIcon />}>
                            Add
                          </MenuButton>
                          <MenuList>
                            <MenuDivider />
                            {
                              empuser.map((emp) => {
                                return (
                                  <MenuOptionGroup  type='checkbox'>
                                    <MenuItemOption onClick={()=>handleTeam(e._id)} value='phone'>{emp.username}</MenuItemOption>

                                  </MenuOptionGroup>
                                )
                              })
                            }

                          </MenuList>
                        </Menu>
                      </Td>
                      <Hide below='md'>
                        <Td>{e.isBudget ? "Not Funded" : "Funded"}</Td>
                      </Hide>
                      <Td>{e.isActive ? "Active" : "Not Active"}</Td>
                      <Td>
                      <IconButton onClick={()=>removePro(e._id)} size='sm' colorScheme='gray' color="black" _focus={{outline:"none"}} icon={<DeleteIcon />}/>
                      
                      </Td>
                      <Td>
                      <IconButton  onClick={()=>handleToggle(e._id,!e.isActive)} size='sm' colorScheme='gray' color="black" _focus={{outline:"none"}} icon={<EditIcon />}/>
                      
                      </Td>
                    </Tr>
                  )
                })
              }













            </Tbody>

          </Table>
        </TableContainer>
      </Box>


    </>
  )
}

export default ProjectList