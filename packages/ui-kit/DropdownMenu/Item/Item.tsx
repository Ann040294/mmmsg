import { FC, ReactNode } from 'react';

export interface MenuItemProps {
    key: string | number;
    icon?: ReactNode; //TODO: Поправить, когда появится компонент Icon
    text?: string;
    className?: string;
    onClick?: () => void;
    // options?: MenuItemProps[],
}

const Item: FC<MenuItemProps> = (props) => {
    return (
        <>
            {/*{props.icon && props.icon}*/}
            <li
                className={props.className}
                onClick={props.onClick}
            >
                {props.text}
            </li>
        </>
    );
};
export default Item;
