import { SigninInput } from "blog-project_medium-common";
import { useState } from "react";
import { Input } from "./Input";
import { AuthHeader } from "./AuthHeader";
import { AuthButton } from "./AuthButton";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthSignin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });

  async function signInRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = response?.data;
      localStorage.setItem("token", jwt);
      toast.success(" Signed in successfully");
      navigate("/blogs");
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data.message);
      return;
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center  ">
        <div>
          <AuthHeader type="signin" />
          <div className="mt-8">
            <Input
              label="Email"
              placeholder="Enter you email"
              onChange={(e) =>
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                })
              }
            />
            <Input
              type={"password"}
              label="Password"
              placeholder="Enter your password"
              onChange={(e) =>
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                })
              }
            />
            <AuthButton type="signin" onclick={signInRequest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignin;
