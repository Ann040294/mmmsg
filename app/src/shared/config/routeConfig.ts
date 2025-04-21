export const ROUTE_CONFIG = {
    HOME: {
        path: '/',
        title: 'home.title',
        labelPage: 'home.labelPage',
    },
    NEW_CHAT: {
        path: 'new-chat',
        title: 'new-chat.title',
        labelPage: 'new-chat.labelPage',
    },
    TEST: {
        path: 'test',
        title: 'test.title',
    },
    PROFILE: {
        path: 'profile',
        title: 'profile.title',
        children: {
            SETTINGS: {
                path: 'settings',
                title: 'profile.children.settings.title',
            },
        },
    },
    LOGOUT: {
        path: 'logout',
        title: 'logout.title',
    },
    LOGIN: {
        path: 'login',
        title: 'login.title',
    },
    REGISTER: {
        path: 'register',
        title: 'register.title',
    },
    RESET: {
        path: 'reset-password',
        title: 'reset.title',
    },
    NOT_FOUND: {
        path: '*',
        title: 'notFound.title',
        labelPage: 'notFound.labelPage',
    },
};
