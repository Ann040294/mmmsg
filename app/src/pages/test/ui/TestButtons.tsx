import { FC, useState } from 'react';

import { Layout } from 'ui-kit';
import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';

import css from '../style.module.scss';

export const TestButtons: FC = () => {
    const handleAnyClick = () => alert(42);
    const [variant, setVariant] = useState(ButtonVariants.SECONDARY);

    const handleButton = () => {
        setVariant((prevState) =>
            prevState === ButtonVariants.PRIMARY
                ? ButtonVariants.SECONDARY
                : ButtonVariants.PRIMARY,
        );
    };

    return (
        <Layout className={css.inputs}>
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
            <Button
                isFullWidth
                text={'test it: ' + variant}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.SMALL}
                onClick={handleButton}
            />
            <h5>size</h5>
            <Button
                variant={variant}
                text={ButtonSize.SMALL}
                size={ButtonSize.SMALL}
                onClick={handleAnyClick}
            />
            <Button
                variant={variant}
                text={ButtonSize.MEDIUM}
                size={ButtonSize.MEDIUM}
                onClick={handleAnyClick}
            />
            <Button
                variant={variant}
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
                variant={variant}
                text={'text'}
                onClick={handleAnyClick}
            />
            <Button
                variant={variant}
                text={'text text text text text'}
                onClick={handleAnyClick}
            />
            <Button
                variant={variant}
                text={
                    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text'
                }
                onClick={handleAnyClick}
            />
            <h5>Full Width</h5>
            <Button
                variant={variant}
                isFullWidth={true}
                text={'true'}
                onClick={handleAnyClick}
            />
            <Button
                variant={variant}
                isFullWidth={false}
                text={'false'}
                onClick={handleAnyClick}
            />
            <h5>Disabled</h5>
            <Button
                variant={variant}
                text={'Disable'}
                isDisabled={true}
                onClick={handleAnyClick}
            />
            <Button
                variant={ButtonVariants.PRIMARY}
                text={'Disable'}
                size={ButtonSize.LARGE}
                isDisabled={true}
                onClick={handleAnyClick}
            />
            <h5>Loading</h5>
            no yet
            <h5>States</h5>
            no yet
        </Layout>
    );
};
