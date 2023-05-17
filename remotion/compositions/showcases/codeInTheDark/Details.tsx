import {ReactNode, useEffect, useState} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

const Details: React.FC<{date: string}> = ({date}) => {
	const frame = useCurrentFrame();
	const [text, setText] = useState<string[]>([]);
	const tagStyle = {margin: 2, color: '#08fe79'};
	const detailsText = `Si vous aussi vous voulez tester vos talents en CSS, Rejoignez-nous le ${date} pour le premier Code In The Dark version Lyonnaise`;
	const detailsStyleText = [
		'infos {',
		'lieu: Zenika;',
		'heure: 19h00;',
		'date: 20 juin 2023;',
	];
	const styleTag = ['<', 's', 't', 'y', 'l', 'e', '>'];
	const styleClosingTag = ['<', '/', 's', 't', 'y', 'l', 'e', '>'];

	const animateLetters = (textArray: string[], delay?: number) => {
		return textArray.map((letter, index) => {
			const managedDelay = delay ? delay + index : index;
			const letterAppear = interpolate(frame - managedDelay, [0, 1], [0, 1], {
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
			});
			return (
				<span key={index} style={{opacity: letterAppear}}>
					{letter}
				</span>
			);
		});
	};

	useEffect(() => {
		const splitedText = detailsText.split('');
		setText(splitedText);
	}, []);

	return (
		<div
			style={{
				fontFamily: 'sans-serif',
				fontSize: '2rem',
				position: 'relative',
				padding: 20,
				maxWidth: '70%',
			}}
		>
			<p style={tagStyle}>&lt;div&gt;</p>
			<p style={{margin: 0, paddingLeft: 40, lineHeight: 1.5, color: 'white'}}>
				{animateLetters(text)}
			</p>
			<p style={tagStyle}>&lt;/div&gt;</p>
			<br />

			<p style={tagStyle}>{animateLetters(styleTag, 135)}</p>
			<div style={{margin: 0, paddingLeft: 40}}>
				{detailsStyleText.map((line, lid) => {
					const splitedLine = line.split('');

					return (
						<p
							key={lid}
							style={{
								color: 'white',
								paddingLeft: lid !== 0 ? 30 : 0,
								margin: 10,
							}}
						>
							{animateLetters(splitedLine, 140 + lid * 12)}
						</p>
					);
				})}
				<p style={{color: 'white', margin: 10}}>{animateLetters(['}'], 195)}</p>
			</div>
			<p style={tagStyle}>{animateLetters(styleClosingTag, 196)}</p>
		</div>
	);
};

export default Details;
