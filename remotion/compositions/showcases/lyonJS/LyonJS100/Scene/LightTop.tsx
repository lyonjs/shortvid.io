import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const LightTop: React.FC = () => {
	const frame = useCurrentFrame();

	const spotOn = (delay: number) =>
		interpolate(frame, [60 + delay, 61 + delay], [0, 0.2], {
			easing: Easing.bezier(0.7, 0.0, 0, 0.2),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

	return (
		<g id="lights-top" style={{opacity: 0.7, mixBlendMode: 'hard-light'}}>
			<g id="spot-top">
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m630.2 201.7c8.7-8.3 26.7-9.1 40.4-1.7 13.6 7.4 17.7 20.2 9 28.6-8.6 8.4-26.7 9.2-40.3 1.8-13.7-7.4-17.7-20.3-9.1-28.7z"
				/>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2297" d="m681.9 234.9h-23.2v-10.7h23.2z" />
						<path id="&lt;Path&gt;" className="s2235" d="m681.9 234.9h-23.2v-3.3h23.2z" />
						<path id="&lt;Path&gt;" className="s2236" d="m678.2 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m833.3 194.9c9.7-7.1 25.6-4.8 35.4 5.2 9.8 10.1 9.9 24 0.1 31.1-9.7 7.1-25.5 4.8-35.3-5.2-9.8-10.1-9.9-24-0.2-31.1z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m1026.5 194.1c9.7-7.2 23.7-4.4 31.2 6 7.5 10.5 5.7 24.8-4.1 32-9.7 7.1-23.6 4.4-31.1-6.1-7.5-10.5-5.7-24.8 4-31.9z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m1216.4 193.2c9.7-7.1 23.6-4.4 31.1 6.1 7.5 10.5 5.7 24.8-4 31.9-9.8 7.1-23.7 4.4-31.2-6.1-7.5-10.5-5.7-24.7 4.1-31.9z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m2028.3 201.7c-8.7-8.3-26.8-9.1-40.4-1.7-13.6 7.4-17.7 20.2-9 28.6 8.6 8.4 26.7 9.2 40.3 1.8 13.7-7.4 17.7-20.3 9.1-28.7z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m1825.2 194.9c-9.8-7.1-25.6-4.8-35.4 5.2-9.8 10.1-9.9 24-0.1 31.1 9.7 7.1 25.5 4.8 35.3-5.2 9.8-10.1 9.9-24 0.2-31.1z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m1632 194.1c-9.8-7.2-23.7-4.4-31.2 6-7.5 10.5-5.7 24.8 4 32 9.8 7.1 23.7 4.4 31.2-6.1 7.5-10.5 5.7-24.8-4-31.9z"
				/>
				<path
					id="shadow-spot"
					className="s2296"
					style={{filter: 'blur(10px)'}}
					d="m1442.1 193.2c-9.7-7.1-23.7-4.4-31.1 6.1-7.5 10.5-5.7 24.8 4 31.9 9.7 7.1 23.7 4.4 31.2-6.1 7.5-10.5 5.6-24.7-4.1-31.9z"
				/>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2298" d="m870.2 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m870.2 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m866.6 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2299" d="m1058.6 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m1058.6 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1054.9 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2300" d="m1246.9 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m1246.9 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1243.3 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2301" d="m1435.3 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m1435.3 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1431.6 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2302" d="m1623.7 234.9h-23.2v-10.7h23.2z" />
						<path id="&lt;Path&gt;" className="s2235" d="m1623.7 234.9h-23.2v-3.3h23.2z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1620 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2303" d="m1812 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m1812 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1808.4 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
				<g id="&lt;Group&gt;">
					<g id="&lt;Group&gt;">
						<path id="&lt;Path&gt;" className="s2304" d="m2000.4 234.9h-23.1v-10.7h23.1z" />
						<path id="&lt;Path&gt;" className="s2235" d="m2000.4 234.9h-23.1v-3.3h23.1z" />
						<path id="&lt;Path&gt;" className="s2236" d="m1996.7 236.6h-15.8v-2.4h15.8z" />
					</g>
				</g>
			</g>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(0)}}
				d="m691.2 1047.4c-117.3 0-212.3-186.8-212.3-417.2 0-230.4 95-417.2 212.3-417.2 117.2 0 212.3 186.8 212.3 417.2 0 230.4-95.1 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(10)}}
				d="m873.1 1047.4c-117.2 0-212.3-186.8-212.3-417.2 0-230.4 95.1-417.2 212.3-417.2 117.3 0 212.3 186.8 212.3 417.2 0 230.4-95 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(20)}}
				d="m1055 1047.4c-117.2 0-212.3-186.8-212.3-417.2 0-230.4 95.1-417.2 212.3-417.2 117.3 0 212.3 186.8 212.3 417.2 0 230.4-95 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(30)}}
				d="m1235.9 1047.4c-117.2 0-212.3-186.8-212.3-417.2 0-230.4 95.1-417.2 212.3-417.2 117.3 0 212.4 186.8 212.4 417.2 0 230.4-95.1 417.2-212.4 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(30)}}
				d="m1418.9 1045.2c-117.3 0-212.3-186.8-212.3-417.2 0-230.4 95-417.2 212.3-417.2 117.2 0 212.3 186.8 212.3 417.2 0 230.4-95.1 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(20)}}
				d="m1596.6 1043.2c-117.3 0-212.3-186.8-212.3-417.2 0-230.4 95-417.2 212.3-417.2 117.2 0 212.3 186.8 212.3 417.2 0 230.4-95.1 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(10)}}
				d="m1778.5 1043.2c-117.2 0-212.3-186.8-212.3-417.2 0-230.4 95.1-417.2 212.3-417.2 117.3 0 212.3 186.8 212.3 417.2 0 230.4-95 417.2-212.3 417.2z"
			/>
			<path
				id="light"
				className="s2233"
				style={{filter: 'blur(40px)', opacity: spotOn(0)}}
				d="m1960.4 1043.2c-117.2 0-212.3-186.8-212.3-417.2 0-230.4 95.1-417.2 212.3-417.2 117.3 0 212.3 186.8 212.3 417.2 0 230.4-95 417.2-212.3 417.2z"
			/>
		</g>
	);
};
