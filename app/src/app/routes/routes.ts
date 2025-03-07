import { ROUTE_CONFIG } from '@shared/config/routeConfig';

export const routes = {
    home: { ...ROUTE_CONFIG.HOME },
    test: { ...ROUTE_CONFIG.TEST },
    profile: { ...ROUTE_CONFIG.PROFILE },
    login: { ...ROUTE_CONFIG.LOGIN },
    register: { ...ROUTE_CONFIG.REGISTER },
    reset: { ...ROUTE_CONFIG.RESET },
    not_found: { ...ROUTE_CONFIG.NOT_FOUND },
};
