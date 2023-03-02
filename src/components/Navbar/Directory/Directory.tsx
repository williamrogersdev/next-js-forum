import { authModalState } from "@/atoms/authModalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Menu, MenuButton, MenuList, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { TiHome } from "react-icons/ti";

const Directory: React.FC<UserMenuProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        border={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.300" }}
      >
        <Flex align="center">
          <Flex align="center">
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600}>Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList></MenuList>
    </Menu>
  );
};
export default Directory;
