export interface InputProps {
  className?: string;
  label?: string;
  hasError?: boolean;
  message?: string;
  variant?: "text" | "search" | "message";
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
