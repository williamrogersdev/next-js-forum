import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { signOut, User } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent="space-between" alignItems="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu/>
      </Flex>
    </>
  );
};
export default RightContent;
