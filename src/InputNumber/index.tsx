import React, { useState } from "react";
import "../assets/css/inputnumber.css";

type Alignment = "left" | "right";

export interface InputNumberInterface {
  onInputChange: (value: string, name: string) => void;
  defaultValue?: number;
  disabled?: boolean;
  border?: boolean;
  name?: string;
  borderRadius?: boolean;
}

export const InputNumber: React.FC<InputNumberInterface> = ({
  onInputChange,
  defaultValue,
  disabled = false,
  border = true,
  name = "",
  borderRadius = false,
}: InputNumberInterface) => {
  const [value, setValue] = useState<number | undefined>(defaultValue);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    onInputChange(e.target.value, name);
  };

  return (
    <div
      className={`rt-inputnumber-container ${
        disabled && "rt-inputnumber-container--disabled"
      }`}
    >
      <input
        type="number"
        className={`rt-input-number ${
          border ? "rt-input-number--bordered" : "rt-input-number--not-bordered"
        } ${borderRadius ? "rt-input-number--with-radius" : null}`}
        disabled={disabled}
        onChange={onchange}
        value={value}
      />
      
    </div>
  );
};
