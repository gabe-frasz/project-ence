import { InputHTMLAttributes, ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

const Root = ({ children }: RootProps) => {
  return <label className="group relative cursor-pointer">{children}</label>;
};

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const Field = (props: FieldProps) => {
  return (
    <input
      {...props}
      className="peer w-full border-b border-white bg-transparent p-3 outline-none"
      placeholder=" "
    />
  );
};

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <span className="absolute -top-3 left-0 select-none transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-4 peer-focus:left-0 peer-focus:-top-3">
      {children}
    </span>
  );
};

export const Input = {
  Root,
  Field,
  Label,
};
