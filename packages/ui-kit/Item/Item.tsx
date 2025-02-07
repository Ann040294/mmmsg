import React, {FC} from "react";
import {Avatar} from "../Avatar";
import {ItemProps} from "./types";

import css from './Item.module.scss'


const Item: FC<ItemProps> = (props) => {

    return <div className={css.root}>
        {
            props.hasAvatar &&
            <Avatar shape={props.avatarShape}
                    src={props.avatarSrc}
                    alt={props.title}
            />
        }
        <div className={css.info}>
            <div className={css.infoRow}>
                <h3 className={css.title}>{props.title}</h3>
                {
                    props.badge &&
                    <p className={css.badge}>{props.badge}</p>
                }
            </div>
            <div className={css.infoRow}>
                {
                    props.description &&
                    <p className={css.description}>{props.description}</p>
                }
            </div>
        </div>
    </div>
}
export default Item
