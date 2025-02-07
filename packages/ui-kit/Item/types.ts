import {HTMLAttributes} from "react";
import {AvatarShapes, AvatarSizes} from "../Avatar";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    description?: string,
    badge?: string,
    hasAvatar?: boolean,
    avatarSize?: AvatarSizes,
    avatarShape?: AvatarShapes,
    avatarSrc?: string,
}
