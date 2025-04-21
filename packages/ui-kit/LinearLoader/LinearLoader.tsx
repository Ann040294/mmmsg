import { FC } from 'react';

import css from './LinearLoader.module.scss';

const LinearLoader: FC = () => {
    return (
        <div className={css.loader}>
            <div className={css.bar} />
        </div>
    );
};

export default LinearLoader;
