import { authModalState } from "@/atoms/authModalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Flex, Menu,
    MenuButton, MenuList
} from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const Directory: React.FC<UserMenuProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        border={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.300" }}
      >
        <Flex align="center">
          <Flex align="center"></Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList></MenuList>
    </Menu>
  );
};
export default Directory;
