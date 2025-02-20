import { FC } from 'react';
import cn from 'classnames';
import RightOutlined from '@ant-design/icons/RightOutlined';

import { Icon as IconType } from '../../Icon/types';

import css from './DropdownItem.module.scss';
import { DropdownMenu } from '../../index';

export interface MenuItemProps {
    key: string | number;
    icon?: IconType;
    text?: string;
    className?: string;
    onClick?: () => void;
    isDisabled?: boolean;
    options?: MenuItemProps[];
}

const Item: FC<MenuItemProps> = ({
    className,
    isDisabled,
    icon: Icon,
    ...props
}) => {
    if (props.options) {
        return (
            <div
                className={cn(css.root, css.block, className)}
                {...props}
            >
                {Icon && <Icon />}
                <span>{props.text}</span>
                <RightOutlined className={css.icon} />
                {/*<DropdownMenu options={props.options}/>*/}
            </div>
        );
    }

    if (Icon) {
        return (
            <li
                className={cn(
                    css.root,
                    css.block,
                    className,
                    isDisabled && css.disabled,
                )}
                {...props}
            >
                <Icon />
                <span>{props.text}</span>
            </li>
        );
    }

    return (
        <>
            <li
                className={cn(css.root, className, isDisabled && css.disabled)}
                {...props}
            >
                {props.text}
            </li>
        </>
    );
};
export default Item;
