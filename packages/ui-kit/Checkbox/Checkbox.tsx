import React, { ChangeEvent, FC, useCallback } from 'react';
import cn from 'classnames';

import css from './Checkbox.module.scss';

export interface CheckboxProps {
    name?: string;
    isChecked?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    label?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({
    name,
    isChecked,
    isRequired,
    isDisabled,
    label,
    className,
    onChange,
}) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
        },
        [onChange],
    );

    return (
        <label
            htmlFor={name}
            className={cn(css.checkbox, className)}
        >
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={isChecked}
                required={isRequired}
                disabled={isDisabled}
                onChange={handleChange}
            />
            {label && <span className={css.label}>{label}</span>}
        </label>
    );
};

export default Checkbox;
