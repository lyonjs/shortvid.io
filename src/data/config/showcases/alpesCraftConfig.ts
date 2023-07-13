import {CompositionProps} from '../compositionsConfig';
import {defaultTalkValues} from '../../defaultValues';
import {AlpesCraft} from '../../../../remotion/compositions/showcases/alpescraft/AlpesCraft';

export const AlpesCraftConfig: CompositionProps = {
	compositionName: 'AlpesCraft',
	component: AlpesCraft,
	width: 1280,
	height: 720,
	durationInFrames: 200,
	defaultProps: defaultTalkValues,
};
