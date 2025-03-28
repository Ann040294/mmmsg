import { FC } from 'react';
import { useRoute } from '@app/test/RouteContext';
import { useOutlet } from 'react-router';

interface NamedOutletProps {
    name?: string;
}

const NamedOutlet: FC<NamedOutletProps> = ({ name }) => {
    const { currentRoute } = useRoute();
    const outlet = useOutlet();
    console.log(outlet?.props.children);

    if (!outlet?.props.children.props.match.route.children) {
        return !outlet?.props.children.props.children;
    }

    const arr: any[] = outlet?.props.children.props.match.route.children;
    const ma = arr.find((item) => currentRoute.includes(item.path));
    console.log('ma', ma);
    if (!ma) {
        return null;
    }

    // const matchingRoute = routes1.find((route) => {
    //     return route.path === currentRoute;
    // });
    //
    // if (!matchingRoute) {
    //     return null;
    // }

    // const outlets = matchingRoute.outlets;

    return ma.element;
};

export default NamedOutlet;
