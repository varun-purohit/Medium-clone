import AuthSignin from "../components/AuthSignin";
import AuthSignup from "../components/AuthSignup";
import Quote from "../components/Quote";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>{type === "signup" ? <AuthSignup /> : <AuthSignin />}</div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Auth;
