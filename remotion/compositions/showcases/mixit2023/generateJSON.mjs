import fs from 'fs';
import fetch from 'node-fetch';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {format} from 'date-fns';

const YEAR = 2023;
const BASE_URL = 'https://mixitconf.org/en';
const fetchSpeakers = () =>
	fetch(`${BASE_URL}/api/${YEAR}/speaker`)
		.then((response) => response.json())
		.then((response) => response.flat());

const fetchTalks = () =>
	fetch(`${BASE_URL}/api/${YEAR}/talk`).then((response) => response.json());

const ROOM_MAPPING = {
	ROOM1: 'Gosling',
	ROOM2: 'Kare',
	ROOM3: 'Turing',
	ROOM4: 'Nonaka',
	ROOM5: 'Dijkstra',
	AMPHI1: 'Hamilton',
	AMPHI2: 'Lovelace',
};

const run = async () => {
	const talks = await fetchTalks();
	const speakers = await fetchSpeakers();

	const enhanceTalks = talks.map((talk) => ({
		title: talk.title,
		date: format(new Date(talk.start), 'dd/MM/yyyy'),
		location: ROOM_MAPPING[talk.room],
		time: format(new Date(talk.start), 'H:mm'),
		speakers: talk.speakerIds.map((id) => {
			const found = speakers.find((speaker) => speaker.login === id) || {};

			return {
				name: `${found.firstname} ${found.lastname}`,
				picture:
					found.photoUrl ||
					'https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg',
			};
		}),
	}));

	const __filename = fileURLToPath(import.meta.url);
	fs.writeFileSync(
		path.join(dirname(__filename), 'talks.json'),
		JSON.stringify(enhanceTalks, null, 2)
	);
};

run();
