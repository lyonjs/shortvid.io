import {Img, Sequence, staticFile} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Theme} from './Theme';
import {Speakers} from './Speakers';

export const Talk = () => {
	return (
		<>
			<Sequence name="Logo">
				<Img
					src={staticFile('images/showcases/volcamp/volcampLogo.svg')}
					alt="Logo Volcamp 2023"
					width={116}
					height={107}
					style={{
						position: 'absolute',
						top: 20,
						left: 50,
					}}
				/>
			</Sequence>
			<Sequence name="Theme">
				<Theme themeName="BigData & AI" />
			</Sequence>
			<Sequence name="Details">
				<Details
					date="12 et 13 Octobre 2023"
					time="10h15"
					location="Hall 32 - Clermont-fd"
				/>
			</Sequence>
			<Sequence name="Speakers">
				<Speakers
					speakers={[
						{
							name: 'Emeric Boyadjian',
							pictureUrl:
								'https://ca.slack-edge.com/T02ARLB3P-U04QCCY3KH8-991e0b5e8a16-512',
						},
						{
							name: 'Emeric Boyadjian',
							pictureUrl:
								'https://ca.slack-edge.com/T02ARLB3P-U04QCCY3KH8-991e0b5e8a16-512',
						},
						{
							name: 'Emeric Boyadjian',
							pictureUrl:
								'https://ca.slack-edge.com/T02ARLB3P-U04QCCY3KH8-991e0b5e8a16-512',
						},
					]}
				/>
			</Sequence>
			<Sequence name="Title">
				<TalkTitle title="Revivez la cryptographie de nos ancêtres, de Lysandre de Sparte à Blaise de Vigenère " />
			</Sequence>
		</>
	);
};
