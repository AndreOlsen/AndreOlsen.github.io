const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Overpass Variable", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				'fade-in-up': 'fadeInUp .3s cubic-bezier(.48, -.38, .41, 1.22) both',
				'wave': 'wave 2.5s infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': {
						transform: 'translateY(100%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1,
					}
				},
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14.0deg)' },
					'20%': { transform: 'rotate(-8.0deg)' },
					'30%': { transform: 'rotate(14.0deg)' },
					'40%': { transform: 'rotate(-4.0deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-fluid-type'),
	],
}
