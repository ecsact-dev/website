const content = process.argv.slice(process.argv.indexOf('--') + 1);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content,
	theme: {
		extend: {
			backgroundImage: {
				logoWhite: 'url(external/ecsact_logo/ecsact-white.png)',
				logoBlack: 'url(external/ecsact_logo/ecsact-black.png)',
				logoColor: 'url(external/ecsact_logo/ecsact-color.png)',
				'subtle-texture': 'url(assets/bg/subtle-texture.webp)',
				'connect-pattern': 'url(assets/bg/connect-pattern.png)',
			},
		},
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
			white: '#d4d4d4',
			black: '#202120',
		},
	},
	plugins: [],
};
