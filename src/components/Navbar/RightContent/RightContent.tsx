import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";

type RightContentProps = {
 
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({user}) => {
  return (
    <>
     <AuthModal/>
      <Flex justifyContent="space-between" alignItems="center">
        {user ?  <div>There is a user</div> : <AuthButtons/>}
      </Flex>
    </>
  );
};
export default RightContent;