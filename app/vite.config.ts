import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    resolve: {
        alias: {
            '@pages': '/src/pages',
            '@shared': '/src/shared',
            '@widgets': '/src/widgets',
            '@features': '/src/features',
            '@entities': '/src/entities',
        },
    },
    plugins: [react()],
});
