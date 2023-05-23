import {MouseEvent, useCallback} from 'react';
import va from '@vercel/analytics';
import {TouraineTechProps} from '../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {ReplayProps} from '../../app/templates/replay/page';
import {TalkBrandedProps} from '../../remotion/compositions/templates/talk/branded/TalkBranded';

export const Code: React.FC<{
	composition: string;
	params:
		| {[key: string]: string | undefined}
		| TouraineTechProps
		| ReplayProps
		| TalkBrandedProps;
}> = ({params, composition}) => {
	const onClickHandler = useCallback((event: MouseEvent) => {
		const element = event.target as HTMLElement;
		const notification = document.querySelector('.notif');

		if (element.textContent) {
			navigator.clipboard.writeText(element.textContent);
			notification?.classList.add('animate-popup');
			va.track('GenerateLocally', {composition});
			setTimeout(() => notification?.classList.remove('animate-popup'), 2000);
		}
	}, []);

	return (
		<>
			<h3 className="text-xl my-6">Generate the video locally 🔗</h3>

			<p className="my-4">
				Please make sure to have <a href="https://pnpm.io/">pnpm</a> installed
				then{' '}
				<a href="https://github.com/lyonjs/shortvid.io">
					clone this repository
				</a>
				, install <a href="https://ffmpeg.org/download.html">ffmpeg library</a>{' '}
				and run <code>pnpm install</code>.
			</p>

			<div className="relative">
				<code
					className=" cursor-pointer rounded-lg block py-3 px-5 break-all text-lg bg-stone-900 hover:bg-stone-700"
					onClick={onClickHandler}
				>
					pnpm remotion render remotion/index.tsx {composition} out/
					{composition}.mp4 --props=&apos;
					{JSON.stringify(params).replace(/'/g, "'\\''")}&apos;
				</code>
				<div className="notif absolute py-2 px-3 bg-amber-300 text-neutral-900 rounded-lg opacity-0 right-0 top-0 pointer-events-none">
					Command copied in clipboard
				</div>
			</div>
		</>
	);
};
