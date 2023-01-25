export interface Speaker {
	picture: string;
	name: string;
}

export interface Talk {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}
