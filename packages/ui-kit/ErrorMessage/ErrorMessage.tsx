import React from "react";
import css from "./errorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.errorMessage}>
      <span className={css.icon}>❌</span>
      <span className={css.message}>{message}</span>
    </div>
  );
};

export default ErrorMessage;
