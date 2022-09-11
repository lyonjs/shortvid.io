import {MouseEvent, useCallback} from 'react';

export const Code: React.FC<{
	composition: string;
	params: {[key: string]: string | undefined};
}> = ({params, composition}) => {
	const onClickHandler = useCallback((event: MouseEvent) => {
		const element = event.target as HTMLElement;
		if (element.textContent) {
			navigator.clipboard.writeText(element.textContent);
			element.classList.add('animated');
			setTimeout(() => element.classList.remove('animated'), 2000);
		}
	}, []);

	return (
		<>
			<h3 className="text-xl my-6">Generate the video locally 🔗</h3>

			<p className="my-4">
				Please make sure to have <a href="https://pnpm.io/">pnpm</a> installed
				then{' '}
				<a href="https://github.com/lyonjs/social-video-generator">
					clone this repository
				</a>
				, install <a href="https://ffmpeg.org/download.html">ffmpeg library</a>{' '}
				and run <code>pnpm install</code>.
			</p>

			<code className="command" onClick={onClickHandler}>
				pnpm remotion render src/index.tsx {composition} out/{composition}.mp4
				--props=&apos;
				{JSON.stringify(params)}&apos;
			</code>
		</>
	);
};
