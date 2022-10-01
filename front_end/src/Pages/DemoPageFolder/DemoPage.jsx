import { VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import DemoPageHeader from './DemoPageHeader'

const DemoPage = () => {
  return (
    <>
        <VStack width="100vw"  >
            <Navbar/>
            <DemoPageHeader/>
        </VStack>
    
    </>
  )
}

export default DemoPage