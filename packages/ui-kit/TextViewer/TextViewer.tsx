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
        <div className={cn(css.message)}>
            <div className={cn(css.messagecontent, css[variant])}>
                {css[variant] && <span className={cn(css.title)}>{title}</span>}
                <p className={cn(css.messagetext)}>{text}</p>
                <span className={cn(css.messagesignature)}>{signature}</span>
            </div>
        </div>
    );
};

export default TextViewer;
