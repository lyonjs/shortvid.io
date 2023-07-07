export interface Speaker {
	picture: string;
	name: string;
}

export interface DefaultProps {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}
