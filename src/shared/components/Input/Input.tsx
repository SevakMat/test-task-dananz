import { ChangeEvent, FC, ReactNode, useId } from "react";

import InputIcon from "@assets/global/InputIcon.svg?react";

import cl from "./Input.module.css";

interface IInputProps {
  placeholder?: string;
  hasIcon?: boolean;
  label: ReactNode;
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

const Input: FC<IInputProps> = ({ label, value, placeholder, hasIcon = false, onChange, onSearch }) => {
  const id = useId();
  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    onChange(target.value);
  };

  return (
    <div className={cl.Input}>
      <label htmlFor={`label-${id}`}>{label}</label>
      <div className={cl.InputInner}>
        <input type='text' id={`label-${id}`} placeholder={placeholder} value={value} onChange={handleOnChange} />
        {hasIcon && <InputIcon onClick={onSearch} />}
      </div>
    </div>
  );
};

export default Input;
