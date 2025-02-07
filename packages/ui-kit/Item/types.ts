import {HTMLAttributes} from "react";
import {AvatarProps} from "../Avatar";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    description?: string,
    avatarProps?: AvatarProps,
    badge?: string,
    hasAvatar?: boolean,
}
