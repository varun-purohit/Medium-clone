import { ChangeEvent } from "react";

interface InputTypes {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function Input({
  label,
  placeholder,
  onChange,
  type,
}: InputTypes): JSX.Element {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border mb-4 border-gray-300 text-grey-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
