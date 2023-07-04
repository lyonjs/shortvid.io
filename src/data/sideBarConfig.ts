type videoProps = {
	compositionName: string;
	compositionId: string;
	compositionLink: string;
};

export type categoryProps = {
	categoryName: string;
	items: videoProps[];
};

type sideBarNavProps = {
	templates: {
		iconifyId: string;
		route: string;
		items: (categoryProps | videoProps)[];
	};
	showcases: {
		iconifyId: string;
		route: string;
		items: videoProps[];
	};
};

export const sideBarNavConfig: sideBarNavProps = {
	templates: {
		iconifyId: 'ic:round-slow-motion-video',
		route: '/templates/',
		items: [
			{
				categoryName: 'talks',
				items: [
					{
						compositionName: 'Talk',
						compositionId: 'Talk',
						compositionLink: 'talk',
					},
					{
						compositionName: 'Talk Branded',
						compositionId: 'TalkBranded',
						compositionLink: 'talkBranded',
					},
				],
			},
			{
				compositionName: 'Layers',
				compositionId: 'Layers',
				compositionLink: 'layers',
			},
			{
				compositionName: 'Sponsor',
				compositionId: 'Sponsor',
				compositionLink: 'sponsor',
			},
			{
				compositionName: 'Event',
				compositionId: 'Event',
				compositionLink: 'event',
			},
			{
				compositionName: 'Meetup',
				compositionId: 'Meetup',
				compositionLink: 'meetup',
			},
			{
				compositionName: 'Silhouette',
				compositionId: 'Silhouette',
				compositionLink: 'silhouette',
			},
		],
	},
	showcases: {
		iconifyId: 'ph:video',
		route: '/showcases/conferences/',
		items: [
			{
				compositionName: 'Devoxx 2023',
				compositionId: 'Devoxx',
				compositionLink: 'Devoxx',
			},
			{
				compositionName: 'Mixit 2023',
				compositionId: 'Mixit',
				compositionLink: 'Mixit',
			},
			{
				compositionName: 'Snowcamp',
				compositionId: 'Snowcamp',
				compositionLink: 'Snowcamp',
			},
			{
				compositionName: 'TouraineTech 2023',
				compositionId: 'TouraineTech',
				compositionLink: 'TouraineTech',
			},
			{
				compositionName: 'Very Tech Trip',
				compositionId: 'VeryTechTrip',
				compositionLink: 'VeryTechTrip',
			},
			{
				compositionName: 'AlpesCraft',
				compositionId: 'AlpesCraft',
				compositionLink: 'AlpesCraft',
			},
			{
				compositionName: 'Camping Des Speakers',
				compositionId: 'CampingDesSpeakers',
				compositionLink: 'CampingDesSpeakers',
			},
			{
				compositionName: 'Volcamp 2023',
				compositionId: 'Volcamp2023',
				compositionLink: 'Volcamp2023',
			},
		],
	},
};
