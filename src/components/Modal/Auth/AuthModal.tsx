import { authModalState } from "@/atoms/authModalAtom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="colum"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >

<Flex direction="column" align="center" justify="center" width="70%">

<OAuthButtons/>
<Text color="gray.500" fontWeight={700}>  OR </Text>
<AuthInputs/>
{/* <ResetPasswords/> */}
</Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
