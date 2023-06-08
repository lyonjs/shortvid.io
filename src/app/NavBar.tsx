import {ActiveLink} from './ActiveLink';

export const NavBar: React.FC = () => {
	return (
		<nav>
			<ul className="flex flex-col justify-between md:flex-row py-5 pb-9">
				<ActiveLink href="/">
					<li className="text-color-btn-text text-center py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🏠 Home</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/templates/meetup">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🗓 Meetup</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/templates/talk">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🎤 Talk</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/templates/brandedTalk">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🏷️ Branded Talk</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/templates/sponsor">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🍕 Sponsor</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/templates/event">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🎉 Event</span>
					</li>
				</ActiveLink>
				<ActiveLink href="/showcases/conferences/CampingDesSpeakers">
					<li className="text-color-btn-text text-center mt-2 md:mt-0 md:ml-5 py-2 px-4 rounded-lg cursor-pointer font-bold hover:scale-105">
						<span>🫱🏼‍🫲🏽 Conference</span>
					</li>
				</ActiveLink>
			</ul>
		</nav>
	);
};
