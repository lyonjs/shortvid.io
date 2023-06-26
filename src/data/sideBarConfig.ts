type videoProps = {
	compositionName: string;
	compositionId: string;
};

export type categoryProps = {
	categoryName: string;
	items: videoProps[];
};

type sideBarProps = {
	templates: (categoryProps | videoProps)[];
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
			compositionName: 'Layers',
			compositionId: 'Layers',
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
			compositionId: 'Devoxx',
		},
		{
			compositionName: 'Mixit 2023',
			compositionId: 'Mixit',
		},
		{
			compositionName: 'Snowcamp',
			compositionId: 'Snowcamp',
		},
		{
			compositionName: 'TouraineTech 2023',
			compositionId: 'TouraineTech',
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
		{
			compositionName: 'Volcamp 2023',
			compositionId: 'Volcamp2023',
		},
	],
	settings: {
		fontFamily: 'noto sans',
	},
};
