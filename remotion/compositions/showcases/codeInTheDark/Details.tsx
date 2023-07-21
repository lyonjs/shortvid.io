import {useEffect, useState} from 'react';
import {loadFont} from '@remotion/google-fonts/AnonymousPro';
import {interpolate, useCurrentFrame} from 'remotion';

const {fontFamily} = loadFont();

const Details: React.FC<{date: string}> = ({date}) => {
	const frame = useCurrentFrame();
	const [text, setText] = useState<string[]>([]);
	const tagStyle = {margin: 2, color: '#08fe79'};
	const detailsText = `Mettez vos talents en CSS à l'épreuve lors de la première édition Lyonnaise de Code In The Dark ! Rejoignez-nous le ${date} pour une soirée de compétition et de fun !`;
	const detailsStyleText = [
		'infos {',
		'organisateurs: LyonJS;',
		'lieu: Zenika;',
		'date: 20 juin 2023;',
		'heure: 19h00;',
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
	}, [detailsText]);

	return (
		<div
			style={{
				fontFamily,
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
			<div style={{margin: 0, paddingLeft: 40, lineHeight: 1.2}}>
				{detailsStyleText.map((line, index) => {
					const splitedLine = line.split('');

					return (
						<p
							key={index}
							style={{
								color: 'white',
								paddingLeft: index !== 0 ? 30 : 0,
								margin: 10,
							}}
						>
							{animateLetters(splitedLine, 140 + index * 12)}
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
