import { useMemo } from 'react';

import { ActionsDisplay } from 'ui-kit/Actions';
import { TextViewerVariant } from 'ui-kit/TextViewer';

import { MessageVariant } from '../types';

export function useMessageVariant(variant: MessageVariant) {
    return useMemo(() => {
        switch (variant) {
            case MessageVariant.SECONDARY:
                return {
                    variantTextViewer: TextViewerVariant.SECONDARY,
                    displayActions: ActionsDisplay.LEFT,
                };
            default:
                return {
                    variantTextViewer: TextViewerVariant.PRIMARY,
                    displayActions: ActionsDisplay.RIGHT,
                };
        }
    }, [variant]);
}
