export interface InputProps {
    className?: string;
    label?: string;
    hasError?: boolean;
    message?: string;
    variant?: 'inputWithLabel' | 'fullfield'; //вынести в enum
    isRequired?: boolean;
    isDisabled?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
