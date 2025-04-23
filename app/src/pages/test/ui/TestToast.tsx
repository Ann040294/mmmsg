import React from 'react';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';

import { IconButton } from 'ui-kit';
import { useToaster } from 'ui-kit/Toaster/ToasterProvider';

async function saveData(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}

export const TestToast: React.FC = () => {
    const toaster = useToaster();

    const handleSave = async () => {
        try {
            await saveData();
            toaster.success('Профиль сохранен');
        } catch {
            toaster.error('Ошибочка вышла');
        }
    };

    return (
        <IconButton
            icon={CheckCircleOutlined}
            onClick={handleSave}
        ></IconButton>
    );
};
