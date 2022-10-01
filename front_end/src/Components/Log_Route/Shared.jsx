


import { Box, Flex, Hide, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Humber from "../Sidebar/Humber";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
import Sidebar from "../Sidebar/Sidebar";
export const Shared = () => {
  return (
    <>
      <Box>
        <Show below='md'>
          <Humber />
        </Show>
      </Box>


      <Flex gap={"40px"}>
        <Box width="14.5%" p={5} position="fixed">
          <Hide below='md'>
            <Sidebar />
          </Hide>
        </Box>
        <Hide below='md'>
          <Box ml="17%" width={'100%'} >
            <Outlet />
          </Box>
        </Hide>
      </Flex>

      <Show below='md'>
        <Box width={'100%'}>
        <Outlet />
        </Box>
</Show>

    </>
  );
}