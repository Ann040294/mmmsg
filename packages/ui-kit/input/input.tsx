import React, { FC, InputHTMLAttributes } from "react";
import cls from "./input.module.scss";
import cn from "classnames";

// Пропсы для Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  type?: "text" | "search" | "message";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input: FC<InputProps> = ({
  className,
  label,
  error,
  errorMessage,
  type = "text",
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <div
      className={cn(cls.wrapper, className, {
        [cls.searchMode]: type === "search",
        [cls.messageMode]: type === "message",
      })}
    >
      {label && type !== "search" && type !== "message" && (
        <label className={cn(cls.label, { [cls.labelError]: error })}>
          {label}
        </label>
      )}
      <div className={cn(cls.inputWrapper)}>
        {iconLeft && <span className={cls.iconLeft}>{iconLeft}</span>}
        <input
          className={cn(cls.input, {
            [cls.searchInput]: type === "search",
            [cls.messageInput]: type === "message",
            [cls.error]: error,
          })}
          {...props}
        />
        {type === "message" && <span className={cls.iconRight}>📷</span>}
        {iconRight && type !== "message" && (
          <span className={cls.iconRight}>{iconRight}</span>
        )}
      </div>
      {error && (
        <span className={cls.errorMessage}>
          {errorMessage || "Что-то пошло не так!"}{" "}
        </span>
      )}
    </div>
  );
};
