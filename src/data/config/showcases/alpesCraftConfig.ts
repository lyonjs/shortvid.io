import {AlpesCraft} from '../../../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const AlpesCraftConfig: CompositionProps = {
	compositionName: 'AlpesCraft',
	component: AlpesCraft,
	width: 1280,
	height: 720,
	durationInFrames: 200,
	defaultProps: defaultTalkValues,
};
