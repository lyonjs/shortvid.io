'use client';

import {Img, staticFile} from 'remotion';

export const Header: React.FC = () => {
	return (
		<header className="flex items-center my-9">
			<Img
				src={staticFile('/Monogram-white.svg')}
				style={{height: '40px', display: 'block'}}
			/>
			<h1 className="text-2xl md:text-3xl ml-5">Shortvid.io</h1>
			<a
				className="ml-auto border-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-200 font-bold"
				href="https://github.com/lyonjs/shortvid.io"
			>
				👨🏼‍💻 Repository
			</a>
		</header>
	);
};
