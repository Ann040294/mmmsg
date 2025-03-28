import { createContext, FC, ReactNode, useContext } from 'react';
import { useLocation } from 'react-router';

type RouteContextType = {
    currentRoute: string;
    // changeRoute: (newRoute: string) => void;
};

export const RouteContext = createContext<RouteContextType>(
    {} as RouteContextType,
);

export const useRoute = () => {
    return useContext(RouteContext);
};

interface RouteProviderProps {
    children: ReactNode;
}

export const RouteProvider: FC<RouteProviderProps> = ({ children }) => {
    const location = useLocation();

    return (
        <RouteContext.Provider value={{ currentRoute: location.pathname }}>
            {children}
        </RouteContext.Provider>
    );
};
