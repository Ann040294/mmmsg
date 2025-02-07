import {MouseEvent} from "react";

export enum AvatarSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum AvatarShapes {
    SQUARE = 'square',
    CIRCLE = 'circle',
}

export interface AvatarProps {
    size?: AvatarSizes,
    shape?: AvatarShapes,
    className?: string,
    src?: string,
    alt?: string,
    onClick?: (event: MouseEvent<HTMLImageElement>) => void,
    srcSet?: string
}
