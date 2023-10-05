/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    daisyui: {
        themes: [{
            light: {
                "primary": "#67e8f9",
                "secondary": "#facc15",
                "accent": "#1dcdbc",
                "neutral": "#e7e5e4",
                "base-100": "#f5f5f4",
                "info": "#cffafe",
                "success": "#bbf7d0",
                "warning": "#fcd34d",
                "error": "#ef4444",
            },
        },],
    }, plugins: [require('daisyui')],
}
