import React, { FC } from "react";
import css from "./input.module.scss";
import cn from "classnames";
import Message from "../Message";
import { InputProps } from "./types";
import {
  CameraOutlined,
  SearchOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

const Input: FC<InputProps> = ({
  className,
  label,
  hasError,
  message,
  variant = "text",
  isRequired,
  isDisabled,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={cn(css.wrapper, className)}>
      {label && variant !== "search" && variant !== "message" && (
        <label className={cn(css.label, { [css.error]: hasError })}>
          {label}
        </label>
      )}

      <div className={cn(css.inputWrapper)}>
        {variant === "search" && <SearchOutlined className={css.iconLeft} />}

        {variant === "message" && (
          <PaperClipOutlined className={css.iconLeft} />
        )}

        <input
          className={cn(css.input, {
            [css.searchInput]: variant === "search",
            [css.messageInput]: variant === "message",
            [css.error]: hasError,
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          {...props}
        />

        {variant === "message" && <CameraOutlined className={css.iconRight} />}
      </div>

      {hasError && message && <Message type="error" message={message} />}
    </div>
  );
};

export default Input;
