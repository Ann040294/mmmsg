import {HTMLAttributes} from "react";
import {AvatarShapes} from "../Avatar";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    description?: string,
    badge?: string,
    hasAvatar?: boolean,
    avatarShape?: AvatarShapes,
    avatarSrc?: string,
}
