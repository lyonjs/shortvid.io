const Box: React.FC<{children: string}> = ({children}) => {
	return (
		<div
			style={{
				color: 'white',
				padding: '15px 25px',
				backgroundColor: '#3a9364',
			}}
		>
			{children}
		</div>
	);
};

export const Organisateurs = () => {
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 0,
				right: 0,
				display: 'flex',
				margin: 20,
				gap: 15,
				fontFamily: 'PressStart2P',
			}}
		>
			<Box>Événement</Box>
			<Box>LyonJS</Box>
		</div>
	);
};
