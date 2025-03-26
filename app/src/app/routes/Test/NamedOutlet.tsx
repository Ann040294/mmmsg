import { Children, cloneElement, FC, ReactNode } from 'react';
import { useOutlet } from 'react-router';

interface NamedOutletProps {
    name: 'left' | 'right';
}

interface OutletProps {
    children?: ReactNode[];
}

const NamedOutlet: FC<NamedOutletProps> = ({ name }) => {
    const outlet = useOutlet();

    if (!outlet) {
        return null;
    }
    const { children } = outlet.props;

    return Children.map(children, (child) => {
        const clonedElem = cloneElement(child, {
            outletName: name,
        });

        return clonedElem;
    });
};

export default NamedOutlet;
