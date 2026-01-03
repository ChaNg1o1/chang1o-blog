/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#8b5cf6',
                    dark: '#6d28d9',
                },
            },
            fontFamily: {
                sans: ['Atkinson', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
