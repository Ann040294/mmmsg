import React, {HTMLAttributes} from "react";
import {FC} from "react";
import css from './ItemChat.module.scss'
import {Avatar} from "../index";
import {AvatarProps} from "../Avatar/Avatar";


type ItemChatProps = HTMLAttributes<HTMLDivElement> & {
    message?: string,
    nameChat: string,
    avatarProps?: AvatarProps,
    time?: string,
    countUnreadMessages?: number,
}

const ItemChat: FC<ItemChatProps> = (props) => {

    return <div className={css.root}>
        <Avatar {...props.avatarProps}/>  {/*TODO Возможна ошибка несоответствия типов. ...AvatarProps | undefined не соответсвует ReactNode | undefined */}
        <div className={css.info}>
            <div className={css.info_row}>
                <h3 className={css.name}>{props.nameChat}</h3>
                {props.time && props.message && <p className={css.time}>{props.time}</p>}
            </div>
            <div className={css.info_row}>
                {props.message &&
                    <>
                        <p className={css.message}>{props.message}</p>
                            {props.countUnreadMessages &&
                                <p className={css.countUnreadMessage}>{props.countUnreadMessages}</p>}
                    </>
                }
            </div>
        </div>
    </div>
}
export default ItemChat