import React from 'react';
import {ActiveLink} from './ActiveLink';

export const NavBar: React.FC = () => {
	return (
		<nav>
			<ul className="flex flex-col justify-between md:flex-row py-5 pb-9">
				<ActiveLink href="/">
					<li className="text-black text-center py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🏠 Home</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/meetup">
					<li className="text-black text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🗓 Meetup</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/talk">
					<li className="text-black text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🎤 Talk</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/sponsor">
					<li className="text-black text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🍕 Sponsor</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/event">
					<li className="text-black text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🎉 Event</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/conference">
					<li className="text-black text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
						<span>🫱🏼‍🫲🏽 Conference</span>
					</li>
				</ActiveLink>
			</ul>
		</nav>
	);
};
