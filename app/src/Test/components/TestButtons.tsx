import { FC } from 'react';
import { Layout } from 'ui-kit';

import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';

import css from '../style.module.scss';

export const TestButtons: FC = () => {
    const handleAnyClick = () => alert(42);

    return (
        <Layout className={css.buttons}>
            <h5>variant</h5>
            <Button
                text={ButtonVariants.PRIMARY}
                variant={ButtonVariants.PRIMARY}
                onClick={handleAnyClick}
            />
            <Button
                text={ButtonVariants.SECONDARY}
                variant={ButtonVariants.SECONDARY}
                onClick={handleAnyClick}
            />

            <h5>size</h5>
            <Button
                text={ButtonSize.SMALL}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
            <Button
                text={ButtonSize.MEDIUM}
                size={ButtonSize.MEDIUM}
                onClick={handleAnyClick}
            />
            <Button
                text={ButtonSize.LARGE}
                size={ButtonSize.LARGE}
                onClick={handleAnyClick}
            />
            <h6>def size & variant</h6>
            <Button
                text={'def'}
                onClick={handleAnyClick}
            />
            <h5>text</h5>
            <Button
                text={'text'}
                onClick={handleAnyClick}
            />
            <Button
                text={'text text'}
                onClick={handleAnyClick}
            />
            <Button
                text={
                    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text'
                }
                onClick={handleAnyClick}
            />
            <h5>Full Width</h5>
            <Button
                isFullWidth={true}
                text={'true'}
                onClick={handleAnyClick}
            />
            <Button
                isFullWidth={false}
                text={'false'}
                onClick={handleAnyClick}
            />
        </Layout>
    );
};
