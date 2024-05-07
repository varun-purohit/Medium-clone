interface AuthButtonProps {
  type: "signup" | "signin";
  onclick: () => Promise<void>;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ type, onclick }) => {
  return (
    <button
      onClick={onclick}
      type="button"
      className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {type === "signup" ? "Sign up" : "Sign in"}
    </button>
  );
};
