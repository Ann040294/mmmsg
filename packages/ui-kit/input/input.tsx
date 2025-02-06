import React, { FC, InputHTMLAttributes } from "react";
import cls from "./input.module.scss";
import cn from "classnames";

// Пропсы для Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  type?: "text" | "search"; // Новый пропс для типа
}

export const Input: FC<InputProps> = ({
  className,
  label,
  error,
  type = "text", // По умолчанию обычный текст
  ...props
}) => {
  return (
    <div
      className={cn(cls.wrapper, className, {
        [cls.searchMode]: type === "search",
      })}
    >
      {/* Показываем label только если это НЕ search */}
      {label && type !== "search" && (
        <label className={cls.label}>{label}</label>
      )}

      {/* Поле ввода с иконкой */}
      <div className={cn(cls.inputWrapper)}>
        {type === "search" && <span className={cls.searchIcon}>🔍</span>}{" "}
        {/* Иконка всегда показывается */}
        <input
          className={cn(cls.input, {
            [cls.searchInput]: type === "search",
            [cls.error]: error,
          })}
          {...props}
        />
      </div>

      {error && <span className={cls.errorMessage}>{error}</span>}
    </div>
  );
};
