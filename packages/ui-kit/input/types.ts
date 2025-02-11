export enum InputType {
  Text = "text",
  Search = "search",
  Message = "message",
}

export interface InputProps {
  className?: string;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  type?: InputType;
  isRequired?: boolean;
  isDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
