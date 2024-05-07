import { Link } from "react-router-dom";

interface AuthHeaderProps {
  type: "signup" | "signin"; // Define the type of 'type' prop
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ type }) => {
  return (
    <div className="px-10">
      <div className="text-3xl font-extrabold">Create Account</div>
      <div className="text-slate-500">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account? "}
        <Link
          to={type === "signup" ? "/signin" : "/signup"}
          className="underline"
        >
          {type === "signup" ? "Sign in" : "Sign up"}
        </Link>
      </div>
    </div>
  );
};
