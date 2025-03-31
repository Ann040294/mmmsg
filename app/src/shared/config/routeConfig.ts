export const ROUTE_CONFIG = {
    HOME: {
        path: '/',
        title: 'Главная',
        labelPage: 'Чаты',
    },
    TEST: {
        path: 'test',
        title: 'Тестирование',
    },
    PROFILE: {
        path: 'profile',
        title: 'Профиль',
        children: {
            SETTINGS: {
                path: 'settings',
                title: 'Настройки',
            },
        },
    },
    LOGOUT: {
        path: 'logout',
        title: 'Выход',
    },
    LOGIN: {
        path: 'login',
        title: 'Авторизация',
    },
    REGISTER: {
        path: 'register',
        title: 'Регистрация',
    },
    RESET: {
        path: 'reset-password',
        title: 'Смена пароля',
    },
    NOT_FOUND: {
        path: '*',
        title: 'Страница не найдена',
    },
};
