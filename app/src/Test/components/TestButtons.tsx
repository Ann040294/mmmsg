import { FC } from 'react';
import { Layout } from 'ui-kit';

import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';

import css from '../style.module.scss';

export const TestButtons: FC = () => {
    const handleAnyClick = () => alert(42);

    return (
        <Layout className={css.buttons}>
            <Button
                text={'PRIMARY'}
                variant={ButtonVariants.PRIMARY}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
            <Button
                text={'PRIMARY'}
                variant={ButtonVariants.PRIMARY}
                size={ButtonSize.MEDIUM}
                onClick={handleAnyClick}
            />
            <Button
                text={'PRIMARY'}
                variant={ButtonVariants.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={handleAnyClick}
            />
            <Button
                text={'PR'}
                variant={ButtonVariants.PRIMARY}
                onClick={handleAnyClick}
            />
            <Button
                text={'PRIMARY PRIMARY'}
                onClick={handleAnyClick}
            />
            <Button
                text={
                    'PRIMARY PRIMARY PRIMARY PRIMARY PRIMARY PRIMARY PRIMARY PRIMARY'
                }
                onClick={handleAnyClick}
            />
            <Button
                text={'SECONDARY'}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
            <Button
                text={'MEDIUM'}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.MEDIUM}
                onClick={handleAnyClick}
            />
            <Button
                text={'LARGE'}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.LARGE}
                onClick={handleAnyClick}
            />
            <Button
                isFullWidth={true}
                text={'isFullWidth={true}'}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
            <Button
                isFullWidth={false}
                text={'isFullWidth={false}'}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
        </Layout>
    );
};
