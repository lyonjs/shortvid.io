import {interpolate, useCurrentFrame} from 'remotion';

export const Volcano = () => {
	const frame = useCurrentFrame();

	const downLavaHeights = [79, 132, 223, 115, 49, 19];

	const lavaDownUp = interpolate(frame, [0, 35], [0.8, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const lavaDownUpStyle = {
		transformOrigin: 'bottom',
		transform: `scaleY(${lavaDownUp})`,
	};

	const [lavaFall1, lavaFall2, lavaFall3, lavaFall4, lavaFall5, lavaFall6] =
		downLavaHeights.map((height, id) => {
			const delay = 30 + id * 2;
			const speed = 40 + Math.round(height / 1.8);
			return interpolate(frame, [delay, speed], [0, height], {
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
			});
		});

	const exploadUp = interpolate(frame, [80, 110], [0, 2], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const lavaUpStyle = {
		transformOrigin: 'bottom',
		transform: `scaleY(${exploadUp})`,
	};

	return (
		<svg
			width="1163"
			height="720"
			viewBox="0 0 1163 655"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: '100%',
				marginTop: 'auto',
			}}
		>
			<g id="Volcano">
				<g id="Up-lava">
					<rect
						id="up-rect-1"
						x="379"
						y="34"
						width="40"
						height="563"
						fill="#FF6700"
						style={lavaUpStyle}
					/>
					<rect
						id="up-rect-2"
						x="419"
						y="53"
						width="56"
						height="548"
						fill="#FF4800"
						style={lavaUpStyle}
					/>
					<rect
						id="up-rect-3"
						x="475"
						width="87"
						height="631"
						fill="#E92700"
						style={lavaUpStyle}
					/>
					<rect
						id="up-rect-4"
						x="562"
						y="120"
						width="91"
						height="583"
						fill="#FF4800"
						style={lavaUpStyle}
					/>
					<rect
						id="up-rect-5"
						x="653"
						y="93"
						width="54"
						height="540"
						fill="#FF6700"
						style={lavaUpStyle}
					/>
					<rect
						id="up-rect-6"
						x="707"
						y="79"
						width="42"
						height="572"
						fill="#E92700"
						style={lavaUpStyle}
					/>
				</g>
				<g id="Down-lava-up">
					<rect
						id="Rect-1"
						x="379"
						y="390"
						width="40"
						height="265"
						fill="#FF6700"
						style={lavaDownUpStyle}
					/>
					<rect
						id="Rect-2"
						x="419"
						y="398"
						width="56"
						height="257"
						fill="#FF4800"
						style={lavaDownUpStyle}
					/>
					<rect
						id="Rect-3"
						x="475"
						y="409"
						width="87"
						height="246"
						fill="#E92700"
						style={lavaDownUpStyle}
					/>
					<rect
						id="Rect-4"
						x="562"
						y="426"
						width="91"
						height="229"
						fill="#FF4800"
						style={lavaDownUpStyle}
					/>
					<rect
						id="Rect-5"
						x="653"
						y="440"
						width="54"
						height="215"
						fill="#FF6700"
						style={lavaDownUpStyle}
					/>
					<rect
						id="Rect-6"
						x="707"
						y="454"
						width="42"
						height="201"
						fill="#E92700"
						style={lavaDownUpStyle}
					/>
				</g>
				<path
					id="Montain"
					d="M0 654.92L335.296 383.263L830.484 482.301L1162.2 654.92C1162.2 654.92 1162.2 654.92 575.394 654.92C575.394 654.92 53.8936 654.92 0 654.92Z"
					fill="url(#paint0_linear_510_14640)"
					filter="url(#shadow)"
				/>
				<g id="Down-lava">
					<rect
						id="Rect-1"
						x="379"
						y="390"
						width="40"
						height={lavaFall6}
						fill="#FF6700"
					/>
					<rect
						id="Rect-2"
						x="419"
						y="398"
						width="56"
						height={lavaFall5}
						fill="#FF4800"
					/>
					<rect
						id="Rect-3"
						x="475"
						y="409"
						width="87"
						height={lavaFall4}
						fill="#E92700"
					/>
					<rect
						id="Rect-4"
						x="562"
						y="426"
						width="91"
						height={lavaFall3}
						fill="#FF4800"
					/>
					<rect
						id="Rect-5"
						x="653"
						y="440"
						width="54"
						height={lavaFall2}
						fill="#FF6700"
					/>
					<rect
						id="Rect-6"
						x="707"
						y="454"
						width="42"
						height={lavaFall1}
						fill="#E92700"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="shadow"
					x="-36"
					y="300"
					width="1272.2"
					height="366.263"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="-7" />
					<feGaussianBlur stdDeviation="27.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_510_14640"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_510_14640"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_510_14640"
					x1="-0.0898895"
					y1="728.033"
					x2="1162.11"
					y2="728.033"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#942900" />
					<stop offset="1" />
				</linearGradient>
			</defs>
		</svg>
	);
};
