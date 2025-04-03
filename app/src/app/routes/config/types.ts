import { RouteObject } from 'react-router';
import { CustomOutletNames } from '@app/routes/ui/Layout/CustomOutlet/types';

export type RouteWithOutlet = RouteObject & {
    outlet?: CustomOutletNames;
    children?: RouteWithOutlet[];
};
