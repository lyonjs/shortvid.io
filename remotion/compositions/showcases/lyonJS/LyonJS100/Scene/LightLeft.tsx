import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const LightLeft: React.FC = () => {
	const frame = useCurrentFrame();

	const spotOn = interpolate(frame, [30, 31], [0, 0.2], {
		easing: Easing.bezier(0.7, 0.0, 0, 0.5),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<g id="lights-left">
			<g id="&lt;Group&gt;">
				<path
					id="light"
					className="s2233"
					style={{filter: 'blur(15px)', opacity: spotOn}}
					d="m454 961.5c-16.2 0-29.3-67.1-29.3-149.9 0-82.8 13.1-149.9 29.3-149.9 16.2 0 29.4 67.1 29.4 149.9 0 82.8-13.2 149.9-29.4 149.9z"
				/>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path
							id="&lt;Path&gt;"
							className="s2239"
							d="m475.9 657.9h-19.5v-31.8h19.5z"
						/>
						<path
							id="&lt;Path&gt;"
							className="s2235"
							d="m475.9 657.9h-19.5v-2.8h19.5z"
						/>
						<path
							id="&lt;Path&gt;"
							className="s2236"
							d="m472.8 659.4h-13.3v-2.1h13.3z"
						/>
					</g>
					<path
						id="&lt;Path&gt;"
						className="s2237"
						d="m458.9 642.5h-38.2v-4.2h38.2z"
					/>
				</g>
				<path
					id="shadow-spot"
					className="s2238"
					style={{filter: 'blur(15px)'}}
					d="m362.9 643.2c0-25.7 20.8-46.6 46.6-46.6 25.7 0 46.5 20.9 46.5 46.6 0 25.7-20.8 46.5-46.5 46.5-25.8 0-46.6-20.8-46.6-46.5z"
				/>
			</g>
		</g>
	);
};
