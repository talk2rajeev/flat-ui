import React, { useState } from "react";
import "../assets/css/inputtext.css";

type Alignment = "left" | "right";

export interface InputTextInterface {
  onInputChange: (value: string, name: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAlignment?: Alignment;
  border?: boolean;
  name?: string;
  borderRadius?: boolean;
}

export const InputText: React.FC<InputTextInterface> = ({
  onInputChange,
  defaultValue = "",
  icon,
  iconAlignment = "right",
  disabled = false,
  border = true,
  name = "",
  borderRadius = false,
}: InputTextInterface) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onInputChange(e.target.value, name);
  };

  return (
    <div
      className={`rt-input-container ${
        disabled && "rt-input-container--disabled"
      }`}
    >
      <input
        className={`rt-input-text ${
          border ? "rt-input-text--bordered" : "rt-input-text--not-bordered"
        } ${
          icon && iconAlignment === "left"
            ? "rt-input-text--icon-padding-left"
            : "rt-input-text--icon-padding-right"
        } ${borderRadius ? "rt-input-text--with-radius" : null}`}
        disabled={disabled}
        onChange={onchange}
        value={value}
      />
      {icon ? (
        <span
          className={`rt-input-icon ${
            icon && iconAlignment === "left"
              ? "rt-input-icon--left"
              : "rt-input-icon--right"
          } `}
        >
          {icon}
        </span>
      ) : null}
    </div>
  );
};
