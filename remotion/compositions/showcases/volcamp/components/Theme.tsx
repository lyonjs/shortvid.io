import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export type ThemeProps = {
	themeName: string;
};

export const Theme: React.FC<ThemeProps> = ({themeName}) => {
	let themeColor;

	switch (themeName) {
		case 'Plénière':
			themeColor = '#fd5945';
			break;
		case 'Lang. & Frameworks':
			themeColor = '#dba243';
			break;
		case 'BigData & AI':
			themeColor = '#89fa98';
			break;
		case 'Web & Mobile':
			themeColor = '#33bab5';
			break;
		case 'Archi, Perf et Sécu':
			themeColor = '#4b78cb';
			break;
		case 'DevOps & Cloud':
			themeColor = '#ffe5a8';
			break;
		case 'UX/UI':
			themeColor = '#fe94a4';
			break;
		case 'Découverte':
			themeColor = '#af7e66';
			break;
		default:
			themeColor = '#6FC660';
			break;
	}

	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 30], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	return (
		<AbsoluteFill style={{width: 'max-content', left: 'auto', right: '40px'}}>
			<div
				style={{
					position: 'relative',
					width: 180,
					height: 120,
					background: 'white',
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
					opacity,
				}}
			>
				<div
					style={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '80%',
					}}
				>
					<span
						style={{
							display: 'block',
							width: '80%',
							textAlign: 'center',
							background: themeColor,
							padding: '10px 15px',
							fontWeight: 'bold',
						}}
					>
						{themeName}
					</span>
				</div>
			</div>
		</AbsoluteFill>
	);
};
