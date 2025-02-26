import { ChangeEvent, FC, useState } from 'react';
import { Layout } from 'ui-kit';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';
import { Input, InputVariants } from 'ui-kit/Input'; 
import { NoticeTypes } from 'ui-kit/Notice';

import css from '../style.module.scss';

export const TestInputs: FC = () => {
    const [value, setValue] = useState('');
    const [variant, setVariant] = useState(InputVariants.OUTLINED);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleButton = () => {
        setVariant((prevState) =>
            prevState === InputVariants.OUTLINED
                ? InputVariants.FILLED
                : InputVariants.OUTLINED,
        );
    };

    return (
        <Layout className={css.inputs}>
            <h5>variant / full</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder={InputVariants.OUTLINED}
                label={InputVariants.OUTLINED}
                iconLeft={SearchOutlined}
                iconRight={SearchOutlined}
                value={value}
                onChange={handleChange}
            />
            <Input
                variant={InputVariants.FILLED}
                placeholder={InputVariants.FILLED}
                label={InputVariants.FILLED}
                iconLeft={SearchOutlined}
                iconRight={SearchOutlined}
                value={value}
                onChange={handleChange}
            />
            <Button
                isFullWidth
                text={'test it: ' + variant}
                variant={ButtonVariants.SECONDARY}
                size={ButtonSize.SMALL}
                onClick={handleButton}
            />
            <h5>Icons</h5>
            <h6>without</h6>
            <Input
                variant={variant}
                placeholder="Enter text..."
                value={value}
                onChange={handleChange}
            />
            <h6>Only Left</h6>
            <Input
                variant={variant}
                placeholder="Search..."
                iconLeft={SearchOutlined}
                value={value}
                onChange={handleChange}
            />
            <h6>Only Right</h6>
            <Input
                variant={variant}
                placeholder="Enter text..."
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />
            <h6>Both Icons</h6>
            <Input
                variant={variant}
                placeholder="Enter text..."
                iconLeft={SearchOutlined}
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />
            <h5>Label</h5>
            <Input
                variant={variant}
                label="Username"
                placeholder="Enter your username"
                value={value}
                onChange={handleChange}
            />
            <h5>Error</h5>
            <Input
                variant={variant}
                placeholder="Enter text..."
                noticeType={NoticeTypes.ERROR}
                message="Something went wrong"
                value={value}
                onChange={handleChange}
            />
            <h6>& Label</h6>
            <Input
                variant={variant}
                label="Username"
                placeholder="Enter text..."
                noticeType={NoticeTypes.ERROR}
                message="Something went wrong"
                value={value}
                onChange={handleChange}
            />
            <h5>Success</h5>
            no yet
            <h5>Warning</h5>
            no yet
            <h5>Disabled</h5>
            <Input
                isDisabled
                variant={variant}
                placeholder="Disabled input"
                value=""
            />
            <h6>& Label</h6>
            <Input
                isDisabled
                label="Username"
                variant={variant}
                placeholder="Disabled input"
                value=""
            />
            <h6>& Error</h6>
            <Input
                isDisabled
                label="Username"
                variant={variant}
                placeholder="Disabled input"
                value=""
                noticeType={NoticeTypes.ERROR}
            />
        </Layout>
    );
};
