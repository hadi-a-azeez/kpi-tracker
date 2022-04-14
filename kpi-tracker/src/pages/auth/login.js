import React from "react";
import HumanImage from "../../assets/human.png";
import { Button, InputField } from "../../components";
const Login = () => {
  return (
    <div className="p-3 flex flex-col items-center w-full">
      <img src={HumanImage} alt="human" className="w-4/5 h-auto" />
      <h1 className="text-gray-800 font-bold text-lg self-start mt-3">Login</h1>
      <div className="flex flex-col gap-3 w-full">
        <InputField type="email" placeholder="username" />
        <InputField type="password" placeholder="Password" />
        <Button label="Login" />
      </div>
    </div>
  );
};

export default Login;
