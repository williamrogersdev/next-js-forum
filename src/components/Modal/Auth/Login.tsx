import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //updaate form state

    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input name="email" placeholder="email" mb={2} onChange={onChange} />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default Login;
