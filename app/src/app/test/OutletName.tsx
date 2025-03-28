import { FC } from 'react';
import { useRoute } from '@app/test/RouteContext';
import { routes1 } from '@app/test/test-routes';

interface NamedOutletProps {
    name: string;
}

const NamedOutlet: FC<NamedOutletProps> = ({ name }) => {
    const { currentRoute } = useRoute();

    const matchingRoute = routes1.find((route) => {
        return route.path === currentRoute;
    });

    if (!matchingRoute) {
        return null;
    }

    const outlets = matchingRoute.outlets;

    return outlets[name];
};

export default NamedOutlet;
