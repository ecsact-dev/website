const content = process.argv.slice(process.argv.indexOf('--') + 1);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content,
	theme: {
		extend: {
			height: {
				'top-nav-height': 'var(--top-nav-height)',
			},
			inset: {
				'top-nav-height': 'var(--top-nav-height)',
			},
			backgroundImage: {
				logoWhite: 'url(external/ecsact_logo/ecsact-white.png)',
				logoBlack: 'url(external/ecsact_logo/ecsact-black.png)',
				logoColor: 'url(external/ecsact_logo/ecsact-color.png)',
				'subtle-texture': 'url(assets/bg/subtle-texture.webp)',
				'grid-texture': 'url(assets/bg/grid.webp)',
				wasmLogo: 'url(assets/brand/wasm.svg)',
				branch: 'url(assets/renders/branch.png)',
				systems: 'url(assets/renders/systems.png)',
				runtime: 'url(assets/renders/runtime.png)',
				logoSvg: 'url(assets/logo.svg)',
				logoSvgOutline: 'url(assets/logo-outline.svg)',
				flowDownSvg: 'url(assets/flow-down.svg)',
			},
			keyframes: {
				'slide-down': {
					'0%': {transform: 'translateY(-100%)'},
					'100%': {transform: 'translateY(0%)'},
				},
				'slide-right': {
					'0%': {transform: 'translateX(-100%)'},
					'100%': {transform: 'translateX(0%)'},
				},
				'fade-slide-right': {
					'0%': {opacity: '0%', transform: 'translateX(-100%)'},
					'35%': {opacity: '0%'},
					'100%': {opacity: '100%', transform: 'translateX(0%)'},
				},
				'fade-out': {
					'0%': {opacity: '100%'},
					'100%': {opacity: '0%'},
				},
				'fade-in': {
					'0%': {opacity: '0%'},
					'100%': {opacity: '100%'},
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
				'slide-right': 'slide-right 150ms cubic-bezier(0, 0, 0.2, 1) 1',
				'fade-slide-right':
					'fade-slide-right 150ms cubic-bezier(0, 0, 0.2, 1) 1',
				'fade-out': 'fade-out 150ms cubic-bezier(0, 0, 0.2, 1) 1',
				'fade-in': 'fade-in 150ms cubic-bezier(0, 0, 0.2, 1) 1',
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
			text: 'var(--color-text)',
			'content-bg': 'var(--color-content-bg)',
			bg: 'var(--color-bg)',
		},
	},
	plugins: [],
};
