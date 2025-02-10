export enum ButtonVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface ButtonProps {
    text: string;
    variant?: ButtonVariants;
}
