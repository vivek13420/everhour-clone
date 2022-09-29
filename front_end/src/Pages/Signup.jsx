import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import style from "../styles/styles.module.css";
import Griddrop from "./Review";

const Signup = () => {
  return (
    <Box>  
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "l", sm: "2xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Make your team more Productive <br />
          <Text as={"span"}>with Everhour</Text>
        </Heading>
        <Text color={"gray.500"}>
          Join 3,500+ customers who use Everhour to track time and plan their
          future projects more effectively
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Center>
            <Button
              w={"80%"}
              
              borderColor={"gray"}
              variant={"outline"}
              size={["sm", "md", "md", "lg"]}
              leftIcon={
                <Image
                  w="20%"
                  mb="20%"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Fgoogle-logo.png&f=1&nofb=1"
                />
              }
            >
              <Center>
                <Text ml="-30%" mb="10%">Sign in with Google</Text>
              </Center>
            </Button>
          </Center>
          <Text>or</Text>
          <Input
            size={["sm", "md", "md", "lg"]}
            w="72%"
            placeholder={"Work Email..."}
            borderColor="gray"
          />
<Link to="/onboarding">
          <Button
            colorScheme={"#4ade80 "}
            bg={"#4ade80 "}
            px={6}
            _hover={{
              bg: "#22c55e",
            }}
          >
            
              Get Started
             
            </Button>
            </Link>
          <Text color={"gray"}>
            Free to try • No credit card required •1-minute signup
          </Text>
        </Stack>
      </Stack>

      <Griddrop />
      <Center>
        <Button
          colorScheme={"white"}
          size={"sm"}
          color="#4ade80  "
          border={"1px solid #4ade80  "}
          _hover={{ color: "white", bg: "#4ade80  " }}
        >
          Read more
        </Button>
      </Center>
    </Box>
  );
};

export default Signup;
