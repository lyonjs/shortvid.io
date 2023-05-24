'use client';

import {Player} from '@remotion/player';
import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {Silhouette} from '../../../remotion/compositions/templates/silhouette/Silhouette';
import {Side} from '../../../remotion/compositions/templates/silhouette/Silhouette.type';
import {SelectInput} from '../../../src/app/forms/selectInput';
import {useSelectChange} from '../../../src/app/hooks/onSelectChange';

export default function SilhouettePage() {
	const [title, setTitle] = useInputChange<string>('Example of big title ');
	const [backgroundImg, setBackgroundImg] = useInputChange<string>(
		'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
	);
	const [side, setSide] = useSelectChange<Side | undefined>('left');
	const [silhouetteUrl, setSilhouetteUrl] = useInputChange<string>(
		'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png'
	);
	const [logoUrl, setLogoUrl] = useInputChange<string | undefined>(undefined);

	const props = {
		title,
		backgroundImg,
		side,
		silhouetteUrl,
		logoUrl,
	};

	return (
		<>
			<div className="flex flex-row pb-4 justify-center items-center md:flex-row md:items-start">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '800px',
						height: '450px',
					}}
					durationInFrames={120}
					compositionWidth={1280}
					compositionHeight={720}
					fps={30}
					component={Silhouette}
					inputProps={props}
				/>

				<Form>
					<Input setValue={setTitle} value={title} label="Title" />
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background Image"
					/>
					<SelectInput
						value={side}
						setValue={setSide}
						label="Side"
						options={['right', 'left']}
					/>
					<Input
						setValue={setSilhouetteUrl}
						value={silhouetteUrl}
						label="Url of silhouette"
					/>
					<Input setValue={setLogoUrl} value={logoUrl} label="Logo url" />
				</Form>
			</div>

			<Code composition="Silhouette" params={props} />
		</>
	);
}
