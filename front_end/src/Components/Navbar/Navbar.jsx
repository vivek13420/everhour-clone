import React from "react";
import {
  Flex,
  IconButton,
  Spacer,
  Box,
  Image,
  Text,
  useDisclosure,
  useColorModeValue,
  Button,
  VStack,
  HStack,
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      pt={2}
      // position="sticky"
      top="-18px"
      className={style.main}
    >
      <HStack
        px="14"
        py={18}
        boxShadow="md"
        rounded="md"
        bg="white"
        justify={{ base: "space-between", md: "center" }}
      >
        <Flex
          // px="14"
          mr="30px"
          // flex={{ base: 1 }}
          justify={{ base: "center", md: "center" }}
          align="center"
          textAlign="center"
          gap="0.5rem"
        >
          <Image
            className={style.image}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
          />
          <Link fontWeight="10rem" className={style.text} to="/">
            Everhour
          </Link>
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          // pt="20px"

          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align="center"
          textAlign="center"
          gap="2rem"
        >
          <Box display={{ lg: "flex" }}>
            <Menu isOpen={isOpen} border="1px solid white">
              <MenuButton
                className={style.text}
                as={Link}
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderradius={5}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Integrations
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
                  />
                  Asana
                </MenuItem>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  />{" "}
                  Github
                </MenuItem>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                  />{" "}
                  Notion
                </MenuItem>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://lh3.googleusercontent.com/-GMnqdh83HhQ/Wgiqf3c30eI/AAAAAAAAAG4/arGBbW7vR5gHPSNTEcOb-zmBx_NhxUuDACLcBGAs/s400/original-favicon_diecut_256.png"
                  />{" "}
                  Monday
                </MenuItem>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMF_st11LgbGuKe7FalrxdE-KFtDbUZRVCiqnklmt&s"
                  />{" "}
                  Gitlab
                </MenuItem>
                <MenuItem>
                  <Image
                    w="20px"
                    mr={"20px"}
                    src="https://img.favpng.com/20/4/5/basecamp-classic-computer-software-project-management-png-favpng-BEy4RLYbqV54b8sV7XypuqaZ4_t.jpg"
                  />{" "}
                  Basecamp
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              variant={"solid"}
              size="xs"
              colorScheme={"green"}
              ml="5px"
              // mt="10px"
            >
              New
            </Button>
          </Box>
          <Link to="/pricing" className={style.text}>
            Pricing
          </Link>

          <Link to="/demo" className={style.text}>
            Demo
          </Link>
          <Spacer />
          <Link to="/login" className={style.text}>
            Login
          </Link>
          <Button
            variant={"solid"}
            size="md"
            colorScheme={"green"}
            ml="-15px"
            // mt="0px"
          >
            Signup
          </Button>
        </Flex>
        <HamburgerMenu/>
      </HStack>
    </Box>
  );
};



export default Navbar;
