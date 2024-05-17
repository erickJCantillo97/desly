import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        AutoImport({
            // eslintrc: {
            //     enabled: true,
            //     filepath: './.eslintrc-auto-import.json',
            // },
            imports: ['vue', '@vueuse/core', '@vueuse/math', 'pinia'],
            vueTemplate: true,
        }),
        VueI18nPlugin({
            include: "resources/js/locales/**"
        }),
        vuetify({ autoImport: true }),
        o
    ],
});
