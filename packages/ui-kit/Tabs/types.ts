import {FunctionComponent} from 'react';

export type Tab = {
    key: string
    title: string;
    Component: FunctionComponent<any>
}