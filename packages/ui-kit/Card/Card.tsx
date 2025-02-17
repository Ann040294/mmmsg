import React, { FC } from 'react';

import { Avatar, AvatarShapes } from '../Avatar';

import css from './Card.module.scss';

interface CardProps {
    title: string;
    description?: string;
    badge?: string;
    hasAvatar?: boolean;
    avatarShape?: AvatarShapes;
    avatarSrc?: string;
}

const Card: FC<CardProps> = (props) => {
    return (
        <div className={css.root}>
            {props.hasAvatar && (
                <Avatar
                    shape={props.avatarShape}
                    src={props.avatarSrc}
                    alt={props.title}
                />
            )}
            <div className={css.info}>
                <div className={css.infoRow}>
                    <div className={css.title}>{props.title}</div>
                    {props.badge && <p className={css.badge}>{props.badge}</p>}
                </div>
                <div className={css.infoRow}>
                    {props.description && (
                        <p className={css.description}>{props.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
