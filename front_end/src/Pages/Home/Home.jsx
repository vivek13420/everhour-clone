import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import "./Home.css";
import { Link } from "react-router-dom";
import g_image from "../../Assets/google-image.png";
const Home = () => {
  return (
    <VStack>
      <Navbar />
      <VStack gap="10px" px="20px" maxW="900px">
        <Flex gap="2" align="center">
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarFill className="star_icon" />
          <BsStarHalf className="star_icon" />
          <Text color="gray.500">4.5 (500+ reviews)</Text>
        </Flex>
        <Flex justifyItems="center" textAlign="center">
          <Text
            lineHeight={["30px", "60px"]}
            fontWeight={["medium", "normal", "semibold"]}
            fontSize={["25px", "35px", "50px"]}
          >
            Powerful time tracking software with hassle-free integrations
          </Text>
        </Flex>

        <Flex maxW="700px" textAlign="center">
          <Text fontSize={["17px", "20px"]} color="rgb(125,127,131)">
            Accurate time tracker for budgeting, client invoicing and painless
            payroll. Works with the apps your team already use
          </Text>
        </Flex>
        <Box textAlign="center" gap={10} display={["block", "flex"]}>
          <Input focusBorderColor='lime' htmlSize={40} size="lg" placeholder="Work email" />

          <Button
            mt={["10px", "0px", "0px"]}
            width={["100%", "40%"]}
            size="lg"
            colorScheme={"green"}
          >
            Try Free
          </Button>
        </Box>
        <Box>
          <Link>
          <HStack>
            <Image display="inline-block" boxSize="30px" objectFit="cover" src={g_image} />
            <Text  >Or sign up with Google Account</Text>
            </HStack>
          </Link>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Home;
