import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box, Button, Flex, Input, Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Toast,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import ProjectList from './ProjectList'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {store} from "../../Store/store"

const getproject=async()=>{
let res=await axios.get(`https://cloneofeverhour.herokuapp.com/projects/63356e456e29a1d70aab7c3b`)
return res
}





// const getUsers=async()=>{
//   let res=await axios.get(`https://cloneofeverhour.herokuapp.com/users?r=admin`)
//   return res
//   }

const toggle=async(id,isActive)=>{
let res=await axios.patch(`https://cloneofeverhour.herokuapp.com/projects/${id}`,{
  isActive
})
return res
}

const Projects = () => {


  const dispatch = useDispatch();
let id = useSelector(store=> store.auth._id);
console.log(id)


  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
const [prodata,setProData]=useState([])
const [title,setTitle]=useState()
const [searchParam,setSearchParam]=useSearchParams()
const [query,setQuery]=useState(searchParam.get("q") || "")
const [searchedData,setSearchedData]=useState([])



const search=(query)=>{
  axios.get(`https://cloneofeverhour.herokuapp.com/projects/63356e456e29a1d70aab7c3b?q=${query}`)
    .then((res)=>{
      console.log(res)
      setSearchedData(res)
    })

}


const handleQuery=(e)=>{

  setTimeout(() => {
      setQuery(e.target.value)
      
  }, 1000);
}

function handlesearch(){
  search(query)
}

useEffect(()=>{
  setSearchParam({q:query})
},[query])


  const projectdata=()=>{
    getproject().then((res)=>{
setProData(res.data)

    })
  }
// console.log("prodata",prodata)

const removePro=async(id)=>{
  const res=await axios.delete(`https://cloneofeverhour.herokuapp.com/projects/${id}`)
   
  if(res.status===200){
    projectdata()
  }
}


const handleToggle=(id,isActive)=>{
  toggle(id,isActive).then((res)=>{
    projectdata()
    console.log("ress",res)
  })
}


const addPro=async(project)=>{
  const res=await axios.post(`https://cloneofeverhour.herokuapp.com/projects/63356e456e29a1d70aab7c3b`,project)
if(res.status===200)
{
  projectdata()

}
}


//   const userdata=()=>{
//     getUsers().then((res)=>{
// // console.log("users2",res.data);
//     })
//   }

//   useEffect(()=>{
//     userdata()
//   },[])


  useEffect(()=>{
    projectdata()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    addPro({title:title})
  }



  return (
    <>

      <Box>
        <Flex justifyContent='space-between'  alignItems='center'>
          <Box>
            <Text fontSize='x-large' fontWeight='medium' color='#57534e '>Projects</Text>
          </Box>
          <Box>

            <Box>

              <Button onClick={onOpen} bg={'#22c55e '} color="white" _hover={{ bg: "green" }} ><Text fontSize='sm' fontWeight='thin'>Create Project</Text></Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}

              >
                <ModalOverlay />

                <ModalContent>
                  <ModalHeader>Create Project</ModalHeader>
                  <ModalCloseButton />

                  <form onSubmit={handleSubmit}>

                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Project name</FormLabel>
                        <Input ref={initialRef}
                         placeholder='Project name'
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}
                          name="title"
/>
                      </FormControl>

                    
                    </ModalBody>

                    <ModalFooter>
                      <Button type="submit"

                        onClick={() =>
                          toast({
                            title: 'Account created.',
                            description: "Your Project is created.",
                            status: 'success',
                            duration: 1000,
                            onClose,
                            isClosable: true,

                          })
                        } colorScheme='green' mr={3}>
                        Create Project
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </form>


                </ModalContent>
              </Modal>
            </Box>

          </Box>
        </Flex>

        <Flex justifyContent='space-between' p={4} mt={6} alignItems='center' bg={'#f5f5f5  '}  >

          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Filter
              </MenuButton>
              <MenuList>
                <MenuItem>IsActive</MenuItem>
                <MenuItem>HasBudget</MenuItem>

              </MenuList>
            </Menu>
          </Box>

          <Box display='flex'>
            <Input type='text' onChange={handleQuery} variant='filled' placeholder='Search Projects...' />
            <Button onClick={handlesearch}>Submit</Button>
          </Box>

        </Flex>


        <Box>
         
        {
          prodata && (
            <ProjectList handleToggle={handleToggle}  prodata={prodata} removePro={removePro} />

          )
        }
      </Box>
      </Box>

    </>

    
  )
}

export default Projects




