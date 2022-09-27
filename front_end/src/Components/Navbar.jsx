import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Text,
  useDisclosure,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import style from "../styles/styles.module.css";
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className={style.main}>
      <Flex
        flex={{ base: 1 }}
        justify={{ base: "center", md: "start" }}
        gap="2rem"
      >
        <Image
          className={style.image}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
        />
        <Link to="/home">Everhour</Link>

        <Menu isOpen={isOpen} border="1px solid white">
          <MenuButton
            as={Link}
            mx={1}
            py={[1, 2, 2]}
            px={4}
            borderRadius={5}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            Integartions
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>
              <Image
                w="20px"
                mr={"20px"}
                src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
              />{" "}
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
        <Link to="/pricing" className={style.text}>
          pricing
        </Link>

        <Button
          variant={"solid"}
          size="xs"
          colorScheme={"green"}
          ml="-15px"
          mt="10px"
        >
          New
        </Button>
        <Link to="/pricing" className={style.text}>
          Demo
        </Link>
        <Spacer />
        <Link to="/pricing" className={style.text}>
          Login
        </Link>
        <Button
          variant={"solid"}
          size="md"
          colorScheme={"green"}
          ml="-15px"
          mt="10px"
        >
          Signup
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
