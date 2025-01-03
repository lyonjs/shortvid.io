import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const LightRight: React.FC = () => {
	const frame = useCurrentFrame();

	const spotOn = interpolate(frame, [30, 31], [0, 0.2], {
		easing: Easing.bezier(0.7, 0.0, 0, 0.2),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<g id="lights-right">
			<g id="&lt;Group&gt;">
				<path id="light" className="s2233" style={{filter: 'blur(15px)', opacity: spotOn}}
							d="m2184.9 961.5c16.1 0 29.3-67.1 29.3-149.9 0-82.8-13.2-149.9-29.3-149.9-16.2 0-29.4 67.1-29.4 149.9 0 82.8 13.2 149.9 29.4 149.9z" />
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2242" d="m2163 657.9h19.4v-31.8h-19.4z" />
						<path id="&lt;Path&gt;" className="s2235" d="m2163 657.9h19.4v-2.8h-19.4z" />
						<path id="&lt;Path&gt;" className="s2236" d="m2166.1 659.4h13.3v-2.1h-13.3z" />
					</g>
					<path id="&lt;Path&gt;" className="s2237" d="m2179.9 642.5h38.3v-4.2h-38.3z" />
					{/*<path id="&lt;Path&gt;" className="s2237" d="m2186.5 648.8h6.6v-16.8h-6.6z" />*/}
				</g>
				<path id="shadow-spot" className="s2238" style={{filter: 'blur(15px)'}}
							d="m2276 643.2c0-25.7-20.9-46.6-46.6-46.6-25.7 0-46.5 20.9-46.5 46.6 0 25.7 20.8 46.5 46.5 46.5 25.7 0 46.6-20.8 46.6-46.5z" />
			</g>
		</g>
	)
}