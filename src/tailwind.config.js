/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Raleway', 'ui-sans-serif', 'system-ui'],
			serif: ['Raleway', 'ui-serif', 'sans-serif'],
			mono: ["'Noto Sans Mono'", 'ui-monospace', 'SFMono-Regular', 'monospace'],
		},
		colors: {
			primary: '#9dd9d2',
			secondary: '#ff8811',
			error: 'rgb(221 100 70)',
			success: 'rgb(86 213 108)',
		},
	},
	plugins: [],
};
