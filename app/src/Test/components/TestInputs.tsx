import { ChangeEvent, FC, useState } from 'react';
import { Input, InputVariants, Layout } from 'ui-kit';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { NoticeTypes } from 'ui-kit/Notice';

import css from '../style.module.scss';

export const TestInputs: FC = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <Layout className={css.layout}>
            <h5>Outlined without Icons</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Enter text..."
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Left Icon</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Search..."
                iconLeft={SearchOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Right Icon</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Enter text..."
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Both Icons</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Enter text..."
                iconLeft={SearchOutlined}
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Label</h5>
            <Input
                variant={InputVariants.OUTLINED}
                label="Username"
                placeholder="Enter your username"
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Error</h5>
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Enter text..."
                noticeType={NoticeTypes.ERROR}
                message="Something went wrong"
                value={value}
                onChange={handleChange}
            />

            <h5>Outlined with Error and with label</h5>
            <Input
                variant={InputVariants.OUTLINED}
                label="Username"
                placeholder="Enter text..."
                noticeType={NoticeTypes.ERROR}
                message="Something went wrong"
                value={value}
                onChange={handleChange}
            />

            <h5>Filled without Icons</h5>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Enter text..."
                value={value}
                onChange={handleChange}
            />

            <h5>Filled with Left Icon</h5>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Search..."
                iconLeft={SearchOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Filled with Right Icon</h5>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Enter text..."
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Filled with Both Icons</h5>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Enter text..."
                iconLeft={SearchOutlined}
                iconRight={CloseOutlined}
                value={value}
                onChange={handleChange}
            />

            <h5>Filled with Label</h5>
            <Input
                variant={InputVariants.FILLED}
                label="Username"
                placeholder="Enter your username"
                value={value}
                onChange={handleChange}
            />

            <h5>Filled with Label and Both Icons</h5>
            <Input
                variant={InputVariants.FILLED}
                label="Username"
                placeholder="Enter your username"
                value={value}
                iconLeft={SearchOutlined}
                iconRight={CloseOutlined}
                onChange={handleChange}
            />

            <h5>Filled with Error</h5>
            <Input
                variant={InputVariants.FILLED}
                placeholder="Enter text..."
                noticeType={NoticeTypes.ERROR}
                message="Something went wrong"
                value={value}
                onChange={handleChange}
            />

            <h5>Disabled Outlined</h5>
            <Input
                isDisabled
                variant={InputVariants.OUTLINED}
                placeholder="Disabled input"
                value=""
            />

            <h5>Disabled Filled</h5>
            <Input
                isDisabled
                variant={InputVariants.FILLED}
                placeholder="Disabled input"
                value=""
            />
        </Layout>
    );
};
