import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";

type RightContentProps = {
 
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({user}) => {
  return (
    <>
     <AuthModal/>
      <Flex justifyContent="space-between" alignItems="center">
        {user ?  <Button onClick={() => signOut(auth)}>Sign Out</Button> : <AuthButtons/>}
      </Flex>
    </>
  );
};
export default RightContent;