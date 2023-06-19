import {Title} from '../../../../design/atoms/Title';

export const TalkTitle: React.FC<{
	title: string;
	style?: React.CSSProperties;
}> = ({title, style}) => {
	return (
		<Title
			style={{
				width: '100%',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '40px',
				textAlign: 'center',
				position: 'absolute',
				minHeight: 150,
				bottom: '180px',
				fontFamily: 'inherit',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
