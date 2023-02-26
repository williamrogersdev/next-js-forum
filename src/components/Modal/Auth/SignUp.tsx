import React, { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { authModalState, ModalView } from "../../../atoms/authModalAtom";
import InputItem from "../../Layout/InputItem";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/clientApp";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [SignUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  // firebase logig

  const onSubmit = () => {
    if (SignUpForm.password !== SignUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(SignUpForm.email, SignUpForm.password);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //updaate form state

    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChange}
      />
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChange}
      />
      {error && (
        <Text textAlign="center" color="red" fontSize={10}>
          {error}
        </Text>
      )}
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Sign Up
      </Button>

      <Flex fontSize={9} justifyContent="center">
        <Text mr={1}>Already Have an Account? </Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
