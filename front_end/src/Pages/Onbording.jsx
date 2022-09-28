import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Onbording() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Welcome to Everhour
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Add your info to make collaborating easy
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>

                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Job Title</FormLabel>

                <Input type="text" />
              </FormControl>
            </Box>
            <Box></Box>

            <FormControl id="email" isRequired>
              <FormLabel>Confirm Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Phone number</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    mt={"-20px"}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Stack pt={6}>
                <Checkbox>
                  I have read and agree the Terms and Privacy Policy
                </Checkbox>
              </Stack>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#4ade80  "}
                color={"white"}
                _hover={{
                  bg: "#22c55e ",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
