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
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

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
          <ModalHeader>
            {modalState.view === "login"  && "Login"}
            {modalState.view === "signup" && "Sign Up"}

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>HIIIIII</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
