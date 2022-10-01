import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Image,
  Show,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { login } from "../Store/auth.action.type";

export default function Login() {
  const[notauth,setnotauth]=useState(true)
  let token = useSelector((store) => store.auth.token);
  let [email, password] = token.split(":");
  console.log(email, password, "fgsd");

  const toast = useToast();
  const [logincred, setlogincred] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setlogincred({
      ...logincred,
      [name]: value,
    });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(logincred);
    let res = await dispatch(login(logincred));
    console.log("token", token);
    console.log(' ssecond hahz');
    // if (!token) {
    //   toast({
    //     title: "Invalid password/Email",
    //     status: "error",
    //     position: "top",

    //     isClosable: true,
    //   });
    // }     
    
    console.log(token);
    console.log(email, password);
  };
  useEffect(() => {
    if (token) {
      toast({
        title: "Successfully Logged In",
        status: "success",
        position: "top",
        duration:1000,
        isClosable: true,
      });
      setTimeout(()=>{
 navigate("/dashboard");
      },1000)
     
    }
  
  }, [token]);

  return (
    <Box>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"#57534e "}>
              {" "}
              Login in to Everhour
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Button
                w={"290px"}
                maxW={"lg"}
                variant={"outline"}
                borderColor={"#a8a29e "}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
              <Center>
                <Text color={"#a8a29e "}>or</Text>
              </Center>

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  onChange={onchange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={onchange} />
              </FormControl>
              <Stack spacing={10}>
                <FormControl>
                  <Center>
                    <Button
                      size={"lg"}
                      m={"auto"}
                      bg={"#4ade80 "}
                      color={"white"}
                      _hover={{
                        bg: "#22c55e ",
                      }}
                      onClick={onsubmit}
                    >
                      Login
                    </Button>
                  </Center>
                </FormControl>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Show above="md">
        <Image
          ml="66%"
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/footer.jpg"
        />
      </Show>
    </Box>
  );
}
