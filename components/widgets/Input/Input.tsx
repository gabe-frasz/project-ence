import { InputHTMLAttributes, useRef, useState } from "react";

export const Input = ({
  type,
  placeholder,
  description,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { description?: string }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label className="group relative w-full">
      <input
        ref={inputRef}
        {...rest}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`${
          inputRef.current?.value.length! > 0 ? "pt-4 pb-2" : "py-2"
        } w-full px-2 focus:pt-4 focus:pb-2 bg-secondary text-sm sm:text-base border-2 border-black rounded-sm transition-all duration-500 placeholder-shown:placeholder:opacity-0`}
      />

      <span
        className={`${
          inputRef.current?.value.length! > 0 ? "top-2 text-xs" : "top-1/2"
        } absolute left-2 -translate-y-1/2 text-sm sm:text-base font-semibold group-focus-within:top-2 group-focus-within:-translate-x-0 group-focus-within:text-xs pointer-events-none transition-all duration-500`}
      >
        {placeholder}
      </span>

      {description && (
        <span
          className={`${
            inputRef.current?.value.length! > 0 ? "top-2 text-xs" : "top-1/2"
          } hidden sm:block absolute left-1/2 -translate-y-1/2 opacity-50 text-sm sm:text-base font-semibold group-focus-within:top-2 group-focus-within:-translate-x-0 group-focus-within:text-xs pointer-events-none transition-all duration-500`}
        >
          {description}
        </span>
      )}
    </label>
  );
};
