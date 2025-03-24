import { FC } from 'react';
import cn from 'classnames';

import { TextViewerVariant } from './types';

import css from './TextViewer.module.scss';

export interface TextViewerProps {
    text: string;
    variant?: TextViewerVariant;
    title?: string;
    subText?: string;
}

const TextViewer: FC<TextViewerProps> = ({
    title,
    variant = TextViewerVariant.PRIMARY,
    text,
    subText,
}) => {
    return (
        <div className={css.block}>
            <div className={cn(css.content, css[variant])}>
                {title && <span className={css.title}>{title}</span>}
                <p className={css.text}>{text}</p>
                {subText && <span className={css.subText}>{subText}</span>}
            </div>
        </div>
    );
};

export default TextViewer;
