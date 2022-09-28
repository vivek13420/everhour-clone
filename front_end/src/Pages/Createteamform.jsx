import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";

export default function Createteam() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}> Let's create your team</Heading>

          <Text color={"gray"}>
            Invite other teammates to fully test the app together
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Company Name</FormLabel>
              <Input type="text" placeholder="e.g My company" />
            </FormControl>
            <FormControl>
              <FormLabel>Size</FormLabel>
              <Select>
                <option value=" ">--</option>
                <option value="Self Employed">Self Employed</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
              </Select>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Emails of People to Invite</FormLabel>
              <Input
                type="email"
                h="200px"
                placeholder="mike@gmail.com,john@gmail.com....etc"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"#4ade80  "}
                color={"white"}
                _hover={{
                  bg: "#22c55e  ",
                }}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
