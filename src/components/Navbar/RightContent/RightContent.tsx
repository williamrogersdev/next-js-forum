import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
 
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justifyContent="space-between" alignItems="center">
        <AuthButtons/>
      </Flex>
    </>
  );
};
export default RightContent;