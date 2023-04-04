/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'Inconsolata': ['Inconsolata', 'sans-serif']
		},
		colors: {
			'primary': '#3B3B3B'
		}
	},
	plugins: 
	[require("daisyui"),
		{
			'postcss-import': {},
			'tailwindcss/nesting': 'postcss-nesting',
			tailwindcss: {},
			autoprefixer: {},
		}
	],
	daisyui: {
		themes: false
	}
}
