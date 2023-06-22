type videoProps = {
	compositionName: string;
	compositionId: string;
};

type sideBarProps = {
	templates: {[category: string]: videoProps[] | string}[];
	showcases: videoProps[];
	settings: {
		fontFamily: string;
	};
};

export const sideBarConfig: sideBarProps = {
	templates: [
		{
			categoryName: 'Talks',
			items: [
				{
					compositionName: 'Talk',
					compositionId: 'Talk',
				},
				{
					compositionName: 'Talk Branded',
					compositionId: 'TalkBranded',
				},
			],
		},
		{
			categoryName: 'Layers',
			items: [
				{
					compositionName: 'Layer Full Screen',
					compositionId: 'LayerFullScreen',
				},
				{
					compositionName: 'Layer One Speaker',
					compositionId: 'LayerOneSpeaker',
				},
				{
					compositionName: 'Layer Two Speaker',
					compositionId: 'LayerTwoSpeaker',
				},
			],
		},
		{
			compositionName: 'Sponsor',
			compositionId: 'Sponsor',
		},
		{
			compositionName: 'Event',
			compositionId: 'Event',
		},
		{
			compositionName: 'Meetup',
			compositionId: 'Meetup',
		},
		{
			compositionName: 'Silhouette',
			compositionId: 'Silhouette',
		},
	],
	showcases: [
		{
			compositionName: 'Devoxx 2023',
			compositionId: 'Devoxx2023',
		},
		{
			compositionName: 'Mixit 2023',
			compositionId: 'Mixit2023',
		},
		{
			compositionName: 'Snowcamp',
			compositionId: 'Snowcamp',
		},
		{
			compositionName: 'TouraineTech 2023',
			compositionId: 'TouraineTech2023',
		},
		{
			compositionName: 'Very Tech Trip',
			compositionId: 'VeryTechTrip',
		},
		{
			compositionName: 'AlpesCraft',
			compositionId: 'AlpesCraft',
		},
		{
			compositionName: 'Camping Des Speakers',
			compositionId: 'CampingDesSpeakers',
		},
	],
	settings: {
		fontFamily: 'noto sans',
	},
};
