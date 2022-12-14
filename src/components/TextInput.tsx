import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className="
        flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
    >
      {children}
    </div>
  );
}

export interface TextInputIcon {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface TextOnlyInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextOnlyInput(props: TextOnlyInputProps) {
  return (
    <input
      className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextOnlyInput,
  Icon: TextInputIcon,
};
