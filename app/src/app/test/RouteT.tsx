import { FC, ReactNode } from 'react';
import { useRoute } from '@app/test/RouteContext';

interface RouteT {
    path?: string;
    element: ReactNode;
    children?: ReactNode;
}

const RouteT: FC<RouteT> = (props) => {
    const { currentRoute } = useRoute();
    const { element: Element, children, path } = props;

    if (path === undefined && children) {
        return Element;
    }

    if (currentRoute != props.path) {
        return null;
    }

    return Element;
};

export default RouteT;
