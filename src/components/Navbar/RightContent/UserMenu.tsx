import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Flex,
  MenuDivider,
} from "@chakra-ui/react";
import { FaRedditSquare } from "react-icons/fa";
import { signOut, User } from "firebase/auth";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import React from "react";
import{MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/clientApp";
 
type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        border={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.300" }}
      >
        {user ? (
          <Flex align="center">
            <Flex align="center">
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                  as={FaRedditSquare}
                />
              </>
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ) : (
          <Icon as={VscAccount} fontSize={24} mr={1}  />
        )}
      </MenuButton>
      <MenuList>
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          _hover={{ bg: "blue.500", color: "white" }}
        >
          <Flex align="center">
            <Icon as={CgProfile} fontSize={20} mr={2} color="gray.300" />
            Profile
          </Flex>
        </MenuItem>

        <MenuDivider />
        <MenuItem
          fontSize="10pt"
          fontWeight={700}
          _hover={{ bg: "blue.500", color: "white" }}
          onClick={() => signOut(auth)}
        >
          <Flex align="center">
            <Icon as={MdOutlineLogin} fontSize={20} mr={2} color="gray.300" />
            Log Out
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
