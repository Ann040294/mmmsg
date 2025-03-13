import React, { FC } from 'react';
import cn from 'classnames';

import { TextViewerVariant } from './types';

import css from './TextViewer.module.scss';

export interface TextViewerProps {
    text: string;
    variant?: TextViewerVariant;
    title?: string;
    signature?: string;
}

const TextViewer: FC<TextViewerProps> = ({
    title,
    variant = TextViewerVariant.PRIMARY,
    text,
    signature,
}) => {
    return (
        <div className={css.message}>
            <div className={cn(css.messagecontent, css[variant])}>
                <span className={css.title}>{title}</span>
                <p className={css.messagetext}>{text}</p>
                <span className={css.messagesignature}>{signature}</span>
            </div>
        </div>
    );
};

export default TextViewer;
