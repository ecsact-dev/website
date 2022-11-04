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
			keyframes: {
				'slide-down': {
					'0%': {transform: 'translateY(-100%)'},
					'100%': {transform: 'translateY(0%)'},
				},
				'error-shake': {
					'0%': {transform: 'translate(8px)'},
					'20%': {transform: 'translate(-8px)'},
					'40%': {transform: 'translate(4px)'},
					'60%': {transform: 'translate(-4px)'},
					'80%': {transform: 'translate(2px)'},
					'100%': {transform: 'translate(0px)'},
				},
			},
			animation: {
				'slide-down': 'slide-down 150ms cubic-bezier(0, 0, 0.2, 1) 1',
				'error-shake': 'error-shake 300ms 1 linear',
			},
		},
		fontFamily: {
			sans: ['Raleway', 'ui-sans-serif', 'system-ui'],
			serif: ['Raleway', 'ui-serif', 'sans-serif'],
			mono: ["'Noto Sans Mono'", 'ui-monospace', 'SFMono-Regular', 'monospace'],
		},
		colors: {
			primary: {
				DEFAULT: '#AA8F00',
				bright: '#dab700',
			},
			transparent: 'transparent',
			secondary: '#9dd9d2',
			error: 'rgb(221 100 70)',
			success: 'rgb(86 213 108)',
			white: '#d4d4d4',
			black: '#202120',
		},
	},
	plugins: [],
};
