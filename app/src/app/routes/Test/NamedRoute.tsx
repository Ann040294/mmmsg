import { FC, ReactNode } from 'react';

interface NamedRouteProps {
    name?: 'left' | 'right';
    outlets: Array<{
        name: string;
        content: ReactNode;
    }>;
}

const NamedRoute: FC<NamedRouteProps> = ({ name, outlets }) => {
    const matchedOutlet = outlets.find((outlet) => {
        return outlet.name === name;
    });
    if (!matchedOutlet) {
        return null;
    }

    return matchedOutlet.content;
};

export default NamedRoute;
