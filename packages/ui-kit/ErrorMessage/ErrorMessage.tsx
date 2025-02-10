import React from "react";
import cls from "./errorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={cls.errorMessage}>
      <span className={cls.icon}>❌</span>
      <span className={cls.message}>{message}</span>
    </div>
  );
};
