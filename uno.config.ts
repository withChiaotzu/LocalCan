import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
} from 'unocss'

export default defineConfig({
	rules: [
		['shadow-btn', {
			'box-shadow': '0 0 0 4px rgba(18, 18, 18, 0.1)',
		}],
		['greenGradient', {
			'background-image': 'linear-gradient(135deg, #E5FF44 0%, #80FF44 100%)',
		}],
		['greenGradientBorder', {
			'background-clip': 'padding-box, border-box',
			'background-image': 'linear-gradient(rgba(18, 18, 18,1), rgba(18, 18, 18,1)), linear-gradient(135deg, #E5FF44 0%, #80FF44 100%)',
		}],
		['orangeGradient', {
			'background-image': 'linear-gradient(135deg, #FF7144 0%, #FF9144 100%)',
		}],
		['orangeGradientBorder', {
			'background-clip': 'padding-box, border-box',
			'background-image': 'linear-gradient(rgba(18, 18, 18,1), rgba(18, 18, 18,1)), linear-gradient(135deg, #FF7144 0%, #FF9144 100%)',
		}],
		['purpleGradient', {
			'background-image': 'linear-gradient(135deg, #9466F6 0%, #D166F6 100%)',
		}],
		['purpleGradientBorder', {
			'background-clip': 'padding-box, border-box',
			'background-image': 'linear-gradient(rgba(18, 18, 18,1), rgba(18, 18, 18,1)), linear-gradient(135deg, #9466F6 0%, #D166F6 100%)',
		}],
		['blueGradient', {
			'background-image': 'linear-gradient(135deg, #44FFF4 0%, #44A5FF 100%)',
		}],
		['blueGradientBorder', {
			'background-clip': 'padding-box, border-box',
			'background-image': 'linear-gradient(rgba(18, 18, 18,1), rgba(18, 18, 18,1)), linear-gradient(135deg, #44FFF4 0%, #44A5FF 100%)',
		}],
		['h1', {
			'background-image': 'linear-gradient(180deg, #ffffff 0%, #e7f3c6 100%)',
		}],
		['h1Blue', {
			'background-image': 'linear-gradient(180deg, #ffffff 0%, #c6e8f3 100%)',
		}],
		['h1Orange', {
			'background-image': 'linear-gradient(180deg, #ffffff 0%, #f3e1c6 100%)',
		}],
		['cta', {
			'background-image': 'linear-gradient(236.08deg, #FFFFFF 12.34%, #C7D59F 86.37%)',
		}],
		['ctaBlue', {
			'background-image': 'linear-gradient(236.08deg, #E3FFE6 -9.77%, #8B92B8 107.49%)',
		}],
		['tableHeader', {
			'background-image': 'linear-gradient(180deg, #272727 0%, #1E1E1E 100%)',
		}],
		['pricingPersonalLicense', {
			'background-image': 'linear-gradient(83deg, #18E18C -9.2%, #77FFC6 17.06%, #FFD541 51.23%)',
		}],
		['pricingForTeams', {
			'background-image': 'linear-gradient(284deg, #514EFF -51.25%, #DC77FF 60.35%, #FFD541 205.56%)',
		}],
	],
	shortcuts: {
		'linear-text': 'bg-clip-text text-transparent',
	},
	theme: {
		colors: {
			primaryMain: '#ffffff',
			primarySurface: '#121212',
			primarySurfaceMenu: '#050505',
			primaryAccent: '#ACF3A6',
			star: '#FFD953',
			warning: '#FFC590',
			negative: '#FF5353',
			greenSolid: '#C3FF44',
			orangeSolid: '#FF7144',
			purpleSolid: '#9466F6',
			blueSolid: '#44FFF4',
		},
		animation: {
			veryFast: '50ms',
			fast: '100ms',
			normal: '200ms',
			slow: '400ms',
			dynamic: 'cubic-bezier(0.31, 0.3, 0.17, 0.99)',
		},
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Inter',
			},
		}),
	],
})
