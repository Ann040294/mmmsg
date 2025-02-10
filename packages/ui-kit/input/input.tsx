import React, { FC } from "react";
import cls from "./input.module.scss";
import cn from "classnames";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

enum InputType {
  Text = "text",
  Search = "search",
  Message = "message",
}

interface InputProps {
  className?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  type?: InputType;
  required?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  className,
  label,
  error,
  errorMessage,
  type = InputType.Text,
  required,
  iconLeft,
  iconRight,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div
      className={cn(cls.wrapper, className, {
        [cls.searchMode]: type === InputType.Search,
        [cls.messageMode]: type === InputType.Message,
      })}
    >
      {/* Label */}
      {label && type !== InputType.Search && type !== InputType.Message && (
        <label className={cn(cls.label, { [cls.labelError]: error })}>
          {label}
        </label>
      )}

      <div className={cn(cls.inputWrapper)}>
        {iconLeft && <span className={cls.iconLeft}>{iconLeft}</span>}
        <input
          className={cn(cls.input, { [cls.error]: error })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {type === InputType.Message && (
          <span className={cls.iconRight}>📷</span>
        )}
        {iconRight && type !== InputType.Message && (
          <span className={cls.iconRight}>{iconRight}</span>
        )}
      </div>

      {/* Используем готовый `ErrorMessage`, если ошибка есть */}
      {error && required && errorMessage && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
};
