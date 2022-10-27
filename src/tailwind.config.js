/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Raleway', 'ui-sans-serif', 'system-ui'],
			serif: ['Raleway', 'ui-serif', 'sans-serif'],
			mono: ["'Noto Sans Mono'", 'ui-monospace', 'SFMono-Regular', 'monospace'],
		},
	},
	plugins: [],
};
