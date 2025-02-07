import {MouseEvent} from "react";

export enum AvatarSizes {
    'small' = 'small',
    'medium' = 'medium',
    'large' = 'large',
}

export enum AvatarShapes {
    'square' = 'square',
    'circle' = 'circle',
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
