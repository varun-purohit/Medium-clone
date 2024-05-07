import { SignupInput } from "blog-project_medium-common";
import { useState } from "react";
import { Input } from "./Input";
import { AuthHeader } from "./AuthHeader";
import { AuthButton } from "./AuthButton";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthSignup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function signUpRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      console.log(response);
      const jwt = response?.data;
      localStorage.setItem("token", jwt);
      toast.success("Signed up successfully");

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
          <AuthHeader type="signup" />
          <div className="mt-8">
            <Input
              label="Name"
              placeholder="Enter you name"
              onChange={(e) =>
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                })
              }
            />
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

            <AuthButton type="signup" onclick={signUpRequest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignup;
