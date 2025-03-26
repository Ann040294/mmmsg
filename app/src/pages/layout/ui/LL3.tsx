import { cloneElement, FC } from 'react';
import { Outlet, useLocation } from 'react-router';

const LayoutPage: FC = (props) => {
    const location = useLocation();
    const clonedElem = cloneElement(props.children, {
        // children: location.pathname.includes('settings') ? <Outlet /> : null,
        // children: <Outlet />,
        // children: nul,
    });

    console.log(clonedElem);

    return (
        <>
            <div>{clonedElem}</div>
            {/*{props.show && <Outlet />}*/}
        </>
    );
};

export default LayoutPage;
