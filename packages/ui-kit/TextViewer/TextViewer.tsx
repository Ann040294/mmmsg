import React, {FC} from 'react';
import cn from 'classnames';

import css from './TextViewer.module.scss';

export interface TextViewer {
    text: string;
    isSender: boolean;
    timestamp?: string;
}

const TextViewer: FC<TextViewer> = ({
                                        text,
                                        isSender,
                                        timestamp
                                    }
) => {
    return (
        <div className={`chat-message ${isSender ? 'chat-message--sender' : 'chat-message--receiver'}`}>
            <div className="chat-message__content">
                <p className="chat-message__text">{text}</p>
                {timestamp && (
                    <span className="chat-message__timestamp">{timestamp}</span>
                )}
            </div>
        </div>
    );
};

export default TextViewer;