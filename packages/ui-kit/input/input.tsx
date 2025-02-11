import React, { FC } from "react";
import css from "./input.module.scss";
import cn from "classnames";
import ErrorMessage from "../ErrorMessage";
import { InputProps, InputType } from "./types";

const Input: FC<InputProps> = ({
  className,
  label,
  hasError,
  errorMessage,
  type = InputType.Text,
  isRequired,
  isDisabled,
  iconLeft,
  iconRight,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div
      className={cn(css.wrapper, className, {
        [css.searchMode]: type === InputType.Search,
        [css.messageMode]: type === InputType.Message,
      })}
    >
      {/* Label */}
      {label && type !== InputType.Search && type !== InputType.Message && (
        <label className={cn(css.label, { [css.error]: hasError })}>
          {label}
        </label>
      )}

      <div className={cn(css.inputWrapper)}>
        {iconLeft && <span className={css.iconLeft}>{iconLeft}</span>}
        <input
          className={cn(css.input, { [css.error]: hasError })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {type === InputType.Message && (
          <span className={css.iconRight}>📷</span>
        )}
        {iconRight && type !== InputType.Message && (
          <span className={css.iconRight}>{iconRight}</span>
        )}
      </div>

      {hasError && errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;
